import React from 'react';
import { connect } from 'react-redux';
import withTypes from '../lib/withTypes.js';

import GameObject from './GameObject.jsx';

const World = withTypes({
    posX: React.PropTypes.number,
    posY: React.PropTypes.number,
}, ({ posX, posY, objectTree }) => {
    function tree(nodeIndex) {
        var node = objectTree[nodeIndex];
        return <GameObject key={node.index} sprite={node.sprite} posX={node.posX} posY={node.posY} extraClasses={node.extraClasses}>
            {node.children.map(tree)}
        </GameObject>
    }
    var rootNode = objectTree[0];
    return (
        <div className="world">
            <div className="scrolling-bg" style={{backgroundPositionX: -posX, backgroundPositionY: -posY }}></div>
            <div className="scrolling-bg dark" style={{backgroundPositionX: -(posX + 24), backgroundPositionY: -(posY + 24) }}></div>
            <GameObject key={rootNode.index} sprite={rootNode.sprite} posX={rootNode.posX - posX} posY={rootNode.posY - posY} extraClasses={rootNode.extraClasses}>
                {rootNode.children.map(tree)}
            </GameObject>
        </div>
    );
});

export default connect(
    (state, props) => ({
        posX: state.world.posX,
        posY: state.world.posY,
        objectTree: state.world.objectTree,
    }), 
    (dispatch, props) => ({
    })
)(World);