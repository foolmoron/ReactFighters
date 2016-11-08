import React from 'react';

class Character extends React.Component {

    constructor(props) {
        super(props);
        this.state = Object.assign({}, props);
        this.state.angle = 0;
        this.state.dirs = {U: false, D: false, L: false, R: false};
    }

    componentDidMount() {
        // key input
        document.addEventListener('keydown', this._onKeyDown);
        document.addEventListener('keyup', this._onKeyUp);
    }
    componentWillUnmount() {
        // key input
        document.removeEventListener('keydown', this._onKeyDown);
        document.removeEventListener('keyup', this._onKeyUp);
    }

    _onKeyDown = (e) => {
        if (e.code == 'KeyW' || e.code == 'ArrowUp') { this.state.dirs.U = true; }
        if (e.code == 'KeyS' || e.code == 'ArrowDown') { this.state.dirs.D = true; }
        if (e.code == 'KeyA' || e.code == 'ArrowLeft') { this.state.dirs.L = true; }
        if (e.code == 'KeyD' || e.code == 'ArrowRight') { this.state.dirs.R = true; }
        this.state.angle = this._getNewAngle(this.state.dirs, this.state.angle);
        this.setState(this.state);
    }
    _onKeyUp = (e) => {
        if (e.code == 'KeyW' || e.code == 'ArrowUp') { this.state.dirs.U = false; }
        if (e.code == 'KeyS' || e.code == 'ArrowDown') { this.state.dirs.D = false; }
        if (e.code == 'KeyA' || e.code == 'ArrowLeft') { this.state.dirs.L = false; }
        if (e.code == 'KeyD' || e.code == 'ArrowRight') { this.state.dirs.R = false; }
        this.state.angle = this._getNewAngle(this.state.dirs, this.state.angle);
        this.setState(this.state);
    }

    _getNewAngle = (dirs, prevAngle) => {
        if (dirs.R) {
            if (dirs.U) { return 315; }
            else if (dirs.D) { return 45; }
            else { return 0; }
        } else if (dirs.L) {
            if (dirs.U) { return 225; }
            else if (dirs.D) { return 135; }
            else { return 180; }
        } else if (dirs.U) {
            return 270;
        } else if (dirs.D) {
            return 90;
        }
        return prevAngle;
    }

    render() {
        var moving = this.state.dirs.U || this.state.dirs.D || this.state.dirs.L || this.state.dirs.R;
        var imgs = []
        for (var i = 0; i < 7; i++) {
            imgs.unshift(<img key={i} className={'character-sprite trail' + i} src={this.props.sprite} />);
        }
        return (
            <div className={'character' + (moving ? ' moving' : '')} style={{transform: `rotateZ(${this.state.angle}deg) scaleY(${(this.state.angle >= 270 || this.state.angle < 90) ? 1 : -1})`}}>
                {imgs}
            </div>
        );
    }
}

module.exports = Character;