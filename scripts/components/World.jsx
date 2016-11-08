import React from 'react';
import { connect } from 'react-redux';
import withTypes from '../lib/withTypes.js';

const World = withTypes({
    posX: React.PropTypes.number,
    posY: React.PropTypes.number,
}, ({ posX, posY }) => {
    return (
        <div className="world">
            <div className="scrolling-bg" style={{backgroundPositionX: -posX, backgroundPositionY: -posY }}></div>
            <div className="scrolling-bg dark" style={{backgroundPositionX: -(posX + 24), backgroundPositionY: -(posY + 24) }}></div>
        </div>
    );
});

export default connect(
    (state, props) => ({
        posX: state.world.posX,
        posY: state.world.posY,
    }), 
    (dispatch, props) => ({
    })
)(World);