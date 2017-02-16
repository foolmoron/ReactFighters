import React from 'react';
import { connect } from 'react-redux';
import { OBJECT_ADD } from '../actions';
import gemSprite from '../../sprites/gem.png';

class AddRandomGemsContainer extends React.Component {
    componentDidMount() {
        this.intervalId = setInterval(() => {this.newGem()}, 1500);
        this.newGem();
    }
    componentWillUnmount() {
        clearInteral(this.intervalId);
    }

    newGem() {
        var angle = Math.random() * Math.PI * 2;
        this.props.dispatch({
            type: OBJECT_ADD,
            layer: 'gem',
            name: 'randomgem' + Math.floor(Math.random()),
            sprite: gemSprite,
            posX: (Math.random() * 300 + 100) * Math.cos(angle),
            posY: (Math.random() * 300 + 100) * Math.sin(angle),
            extraClasses: ['pulseAndSway'],
        });
    }

    render = () => <div className="add-random-gems-container"></div>;
}

module.exports = connect()(AddRandomGemsContainer);