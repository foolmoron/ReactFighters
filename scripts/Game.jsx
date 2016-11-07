import React from 'react';
import ReactDOM from 'react-dom';

import GameBorder from './GameBorder.jsx';
import World from './World.jsx';
 
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
                <GameBorder />
            </div>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById('root'));

module.exports = Game;