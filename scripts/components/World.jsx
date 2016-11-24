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
        return <GameObject key={node.index} sprite={node.sprite} posX={node.posX} posY={node.posY} extraClasses={node.extraClasses.concat(node.active ? null : 'hidden')}>
            {node.children.map(tree)}
        </GameObject>
    }
    var rootNode = objectTree[0];
    return (
        <div className="world">
            <div className="scrolling-bg" style={{backgroundPositionX: (-posX + innerWidth/2), backgroundPositionY: (-posY + innerHeight/2) }}></div>
            <div className="scrolling-bg dark" style={{backgroundPositionX: (-posX + innerWidth/2 - 24), backgroundPositionY: (-posY + innerHeight/2 - 24) }}></div>
            <GameObject key={rootNode.index} sprite={rootNode.sprite} posX={rootNode.posX - posX + innerWidth/2} posY={rootNode.posY - posY + innerHeight/2} extraClasses={rootNode.extraClasses}>
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