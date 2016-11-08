import React from 'react';

class World extends React.Component {
    static propTypes = {
        posX: React.PropTypes.number,
        posY: React.PropTypes.number,
        velX: React.PropTypes.number,
        velY: React.PropTypes.number,
        accelX: React.PropTypes.number,
        accelY: React.PropTypes.number,
        speed: React.PropTypes.number,
    };
    static defaultProps = {
        posX: 0,
        posY: 0,
        velX: 0,
        velY: 0,
        accelX: 0,
        accelY: 0,
        speed: 500,
    };

    constructor(props) {
        super(props);
        this.state = Object.assign({}, props);
        this.state.dirs = {U: false, D: false, L: false, R: false};
    }

    componentDidMount() {
        // key input
        document.addEventListener('keydown', this._onKeyDown);
        document.addEventListener('keyup', this._onKeyUp);
        // updating
        this.stop = false;
        this.prevTime = performance.now() - 16.66666;
        this.update();
    }
    componentWillUnmount() {
        // key input
        document.removeEventListener('keydown', this._onKeyDown);
        document.removeEventListener('keyup', this._onKeyUp);
        // updating
        this.stop = true;
    }

    _onKeyDown = (e) => {
        if (e.code == 'KeyW' || e.code == 'ArrowUp') { this.state.dirs.U = true; }
        if (e.code == 'KeyS' || e.code == 'ArrowDown') { this.state.dirs.D = true; }
        if (e.code == 'KeyA' || e.code == 'ArrowLeft') { this.state.dirs.L = true; }
        if (e.code == 'KeyD' || e.code == 'ArrowRight') { this.state.dirs.R = true; }
        this.setState(this.state);
    }
    _onKeyUp = (e) => {
        if (e.code == 'KeyW' || e.code == 'ArrowUp') { this.state.dirs.U = false; }
        if (e.code == 'KeyS' || e.code == 'ArrowDown') { this.state.dirs.D = false; }
        if (e.code == 'KeyA' || e.code == 'ArrowLeft') { this.state.dirs.L = false; }
        if (e.code == 'KeyD' || e.code == 'ArrowRight') { this.state.dirs.R = false; }
        this.setState(this.state);
    }

    update = () => {
        if (this.stop) {
            return;
        }
        var dt = (performance.now() - this.prevTime) / 1000;
        this.prevTime = performance.now();
        // process update
        this.state.velX = (this.state.dirs.L) ? -1 : (this.state.dirs.R) ? 1 : 0;
        this.state.velY = (this.state.dirs.U) ? -1 : (this.state.dirs.D) ? 1 : 0;
        var normalized = Math.sqrt(this.state.velX*this.state.velX + this.state.velY*this.state.velY);
        if (normalized) {
            this.state.velX = this.state.velX * this.props.speed / normalized;
            this.state.velY = this.state.velY * this.props.speed / normalized;
        }
        this.state.velX += this.state.accelX * dt;
        this.state.velY += this.state.accelY * dt;
        this.state.posX += this.state.velX * dt;
        this.state.posY += this.state.velY * dt;
        this.setState(this.state);
        // end process update
        requestAnimationFrame(this.update);
    }

    render() {
        return (
            <div className="world">
                <div className="scrolling-bg" style={{backgroundPositionX: -this.state.posX, backgroundPositionY: -this.state.posY }}></div>
                <div className="scrolling-bg dark" style={{backgroundPositionX: -(this.state.posX + 24), backgroundPositionY: -(this.state.posY + 24) }}></div>
            </div>
        );
    }
}

module.exports = World;