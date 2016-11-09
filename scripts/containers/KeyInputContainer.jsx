import React from 'react';
import { connect } from 'react-redux';
import { KEY_UP, KEY_DOWN } from '../actions';

class KeyInputContainer extends React.Component {
    componentDidMount() {
        document.addEventListener('keydown', this._onKeyDown);
        document.addEventListener('keyup', this._onKeyUp);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this._onKeyDown);
        document.removeEventListener('keyup', this._onKeyUp);
    }

    _onKeyDown = (e) => {
        this.props.dispatch({ type: KEY_DOWN, key: e.code });
    }
    _onKeyUp = (e) => {
        this.props.dispatch({ type: KEY_UP, key: e.code });
    }

    render = () => <div className="key-input-container"></div>;
}

module.exports = connect()(KeyInputContainer);