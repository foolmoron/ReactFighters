import React from 'react';
import { connect } from 'react-redux';
import withTypes from '../lib/withTypes.js';

const UI = withTypes({
}, ({}) => {
    return (
        <div className="ui">
            <span>React Fighters</span><span> by foolmoron</span>
        </div>
    );
});

export default connect(
    (state, props) => ({
    }), 
    (dispatch, props) => ({
    })
)(UI);