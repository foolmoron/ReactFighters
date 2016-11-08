import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import KeyInputContainer from './containers/KeyInputContainer.jsx';
import UpdateContainer from './containers/UpdateContainer.jsx';

import GameBorder from './components/GameBorder.jsx';
import World from './components/World.jsx';
import Character from './components/Character.jsx';

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
                <div className="global-containers" style={{hidden: true}}>
                    <KeyInputContainer />
                    <UpdateContainer />
                </div>
                <World />
                <Character sprite={characterSprite} />
                <GameBorder />
            </div>
        );
    }
}

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>, document.getElementById('root')
);

module.exports = Game;