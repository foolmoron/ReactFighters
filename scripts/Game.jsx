import React from 'react';
import ReactDOM from 'react-dom';
import GameBorder from './GameBorder.jsx';
 
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
            <GameBorder />
        );
    }
}

ReactDOM.render(<Game />, document.getElementById('game'));