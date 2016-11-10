import React from 'react';
import { connect } from 'react-redux';
import withTypes from '../lib/withTypes.js';

const UI = withTypes({
}, ({ buttons }) => {
    return (
        <div className="ui">
            <span>React Fighters</span><span> by foolmoron</span>
            {
                buttons
                .map((button, i) => <div className="ui-button" key={i}>{button.text}</div>)
            }
        </div>
    );
});

export default connect(
    (state, props) => ({
        buttons: state.ui.buttons,
    }), 
    (dispatch, props) => ({
    })
)(UI);