import React from 'react';
import { connect } from 'react-redux';
import withTypes from '../lib/withTypes.js';

const UI = withTypes({
}, ({ buttons, gems }) => {
    return (
        <div className="ui">
            <span>React Fighters</span><span> by foolmoron</span><span style={{float: 'right'}}>Gems: {gems}</span>
            <div className="ui-buttons">
                {
                    buttons
                    .map((button, i) => <div className="ui-button" key={i}>{button.text}</div>)
                }
            </div>
        </div>
    );
});

export default connect(
    (state, props) => ({
        buttons: state.ui.buttons,
        gems: state.stats.gems,
    }), 
    (dispatch, props) => ({
    })
)(UI);