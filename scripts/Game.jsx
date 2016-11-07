import React from 'react';
import ReactDOM from 'react-dom';

import GameBorder from './GameBorder.jsx';
import World from './World.jsx';
import Character from './Character.jsx';

import characterSprite from '../sprites/character.png';
 
class Game extends React.Component {
    static propTypes = {};
    static defaultProps = {};

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="game">
                <World />
                <Character sprite={characterSprite} />
                <GameBorder />
            </div>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById('root'));

module.exports = Game;