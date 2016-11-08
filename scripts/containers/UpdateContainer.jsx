import React from 'react';
import { connect } from 'react-redux';
import { UPDATE } from '../actions';

class UpdateContainer extends React.Component {
    static propTypes = {
    };
    static defaultProps = {
    };

    componentDidMount() {
        this.stop = false;
        this.prevTime = performance.now() - 16.66666;
        this.update();
    }
    componentWillUnmount() {
        this.stop = true;
    }

    update = () => {
        if (this.stop) {
            return;
        }
        var dt = (performance.now() - this.prevTime) / 1000;
        this.props.dispatch({ type: UPDATE, dt: dt });
        this.prevTime = performance.now();
        requestAnimationFrame(this.update);
    }

    render = () => <div className="update-container"></div>;
}

module.exports = connect()(UpdateContainer);