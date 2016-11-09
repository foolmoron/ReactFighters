import React from 'react';
import { connect } from 'react-redux';
import withTypes from '../lib/withTypes.js';

const GameObject = withTypes({
    sprite: React.PropTypes.string,
    posX: React.PropTypes.number,
    posY: React.PropTypes.number,
    extraClasses: React.PropTypes.arrayOf(React.PropTypes.string),
}, ({ sprite, posX, posY, extraClasses }) => {
    return (
        <div className="go" style={{ transform: `translate3d(${posX}px, ${posY}px, 0)`}}>
            <img className={['go-sprite'].concat(extraClasses).join(' ')} src={sprite} />
        </div>
    );
});

export default connect(
    (state, props) => ({
    }), 
    (dispatch, props) => ({
    })
)(GameObject);