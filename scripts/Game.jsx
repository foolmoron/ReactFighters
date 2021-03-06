import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import { OBJECT_ADD } from './actions';

import KeyInputContainer from './containers/KeyInputContainer.jsx';
import MouseInputContainer from './containers/MouseInputContainer.jsx';
import UpdateContainer from './containers/UpdateContainer.jsx';
import AddRandomGemsContainer from './containers/AddRandomGemsContainer.jsx';

import GameBorder from './components/GameBorder.jsx';
import World from './components/World.jsx';
import Character from './components/Character.jsx';
import UI from './components/UI.jsx';

import characterSprite from '../sprites/character.png';
import gemSprite from '../sprites/gem.png';

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
                <div className="global-containers hidden">
                    <KeyInputContainer />
                    <MouseInputContainer />
                    <UpdateContainer />
                    <AddRandomGemsContainer />
                </div>
                <World />
                <Character sprite={characterSprite} />
                <UI />
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

// for (var i = 0; i < 1; i++) {
//     store.dispatch({
//         type: OBJECT_ADD,
//         layer: 'gem',
//         name: 'gem' + i,
//         parent: 0,
//         sprite: gemSprite,
//         posX: (Math.random() * 1000 + 100) * (Math.random() < 0.5 ? -1 : 1),
//         posY: (Math.random() * 1000 + 100) * (Math.random() < 0.5 ? -1 : 1),
//         extraClasses: ['pulseAndSway'],
//     });
// }
// for (var i = 1; i < 13; i++) {
//     store.dispatch({
//         type: OBJECT_ADD,
//         layer: 'gem',
//         name: 'gem' + i,
//         parent: 1,
//         sprite: gemSprite,
//         posX: (Math.random() * 200 + 100) * (Math.random() < 0.5 ? -1 : 1),
//         posY: (Math.random() * 200 + 100) * (Math.random() < 0.5 ? -1 : 1),
//         extraClasses: ['pulseAndSway'],
//     });
// }

export default Game;