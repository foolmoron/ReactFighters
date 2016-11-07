import React from 'react';
import ReactDOM from 'react-dom';
 
class Game extends React.Component {
    static propTypes = {counterInterval: React.PropTypes.number, incrementAmount: React.PropTypes.number}
    static defaultProps = {counterInterval: 1000, incrementAmount: 3};

    constructor(props) {
        super(props);
        this.state = {counter: 0};
        this.test2 = {date2: 2};
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), this.props.counterInterval || 100);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState((prev, props) => ({counter: prev.counter + props.incrementAmount}));
    }

    render() {
        return <h1>Game test {this.state.counter}</h1>
    }
}

ReactDOM.render(<Game counterInterval={250} incrementAmount={5} />, document.getElementById('game'));