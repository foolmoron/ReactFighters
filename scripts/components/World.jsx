import React from 'react';
import { connect } from 'react-redux';
import withTypes from '../lib/withTypes.js';

import GameObject from './GameObject.jsx';

const World = withTypes({
    posX: React.PropTypes.number,
    posY: React.PropTypes.number,
}, ({ posX, posY, gameObjects }) => {
    return (
        <div className="world">
            <div className="scrolling-bg" style={{backgroundPositionX: -posX, backgroundPositionY: -posY }}></div>
            <div className="scrolling-bg dark" style={{backgroundPositionX: -(posX + 24), backgroundPositionY: -(posY + 24) }}></div>
            {
                gameObjects
                .map((obj, i) => <GameObject key={i} sprite={obj.sprite} posX={obj.posX - posX} posY={obj.posY - posY} extraClasses={obj.extraClasses} />)
            }
        </div>
    );
});

export default connect(
    (state, props) => ({
        posX: state.world.posX,
        posY: state.world.posY,
        gameObjects: state.world.gameObjects,
    }), 
    (dispatch, props) => ({
    })
)(World);