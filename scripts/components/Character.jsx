import React from 'react';
import { connect } from 'react-redux';
import withTypes from '../lib/withTypes.js';

const Character = withTypes({
    sprite: React.PropTypes.string,
    angle: React.PropTypes.number,
    moving: React.PropTypes.bool,
}, ({ sprite, angle, moving }) => {
    return (
        <div className={'character' + (moving ? ' moving' : '')} style={{transform: `rotateZ(${angle}deg) scaleY(${(angle >= 270 || angle < 90) ? 1 : -1})`}}>
            {
                Array(7)
                .fill()
                .map((a, i) => <img key={i} className={'character-sprite trail' + i} src={sprite} />)
                .reverse()
            }
        </div>
    );
});

export default connect(
    (state, props) => ({ 
        angle: state.character.angle,
        moving: state.direction.x != 0 || state.direction.y != 0,
    }), 
    (dispatch, props) => ({
    })
)(Character);