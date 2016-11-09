import React from 'react';
import { connect } from 'react-redux';
import { MOUSE_UP, MOUSE_DOWN, MOUSE_MOVE } from '../actions';

class MouseInputContainer extends React.Component {
    componentDidMount() {
        document.addEventListener('mousedown', this._onMouseDown);
        document.addEventListener('touchstart', this._onMouseDown);
        document.addEventListener('mousemove', this._onMouseMove);
        document.addEventListener('touchmove', this._onMouseMove);
        document.addEventListener('mouseup', this._onMouseUp);
        document.addEventListener('touchend', this._onMouseUp);
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this._onMouseDown);
        document.removeEventListener('touchstart', this._onMouseDown);
        document.removeEventListener('mousemove', this._onMouseMove);
        document.removeEventListener('touchmove', this._onMouseMove);
        document.removeEventListener('mouseup', this._onMouseUp);
        document.removeEventListener('touchend', this._onMouseUp);
    }

    _onMouseDown = (e) => {
        this.props.dispatch({ type: MOUSE_DOWN, mouseX: e.clientX, mouseY: e.clientY });
    }
    _onMouseMove = (e) => {
        this.props.dispatch({ type: MOUSE_MOVE, mouseX: e.clientX, mouseY: e.clientY });
    }
    _onMouseUp = (e) => {
        this.props.dispatch({ type: MOUSE_UP, mouseX: e.clientX, mouseY: e.clientY });
    }

    render = () => <div className="mouse-input-container"></div>;
}

module.exports = connect()(MouseInputContainer);