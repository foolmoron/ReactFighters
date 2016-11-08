import React from 'react';
import { connect } from 'react-redux';
import withTypes from '../lib/withTypes.js';

const GameBorder = withTypes({
}, ({}) => {
    return (
        <div className="game-border" />
    );
});

export default connect(
    (state, props) => ({
    }), 
    (dispatch, props) => ({
    })
)(GameBorder);