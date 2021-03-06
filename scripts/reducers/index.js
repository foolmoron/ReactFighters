import directionReducer from './directionReducer.js';
import worldReducer from './worldReducer.js';
import characterReducer from './characterReducer.js';
import uiReducer from './uiReducer.js';
import statsReducer from './statsReducer.js';
import collisionReducer from './collisionReducer.js';

// combine reducers in a custom way to pass an extra 3rd parameter that contains the entire state
export default (state = {}, action) => {
    state = {
        direction: directionReducer(state.direction, action, state),
        world: worldReducer(state.world, action, state),
        character: characterReducer(state.character, action, state),
        ui: uiReducer(state.ui, action, state),
        stats: statsReducer(state.stats, action, state),
    };
    // global reducers
    state = collisionReducer(state, action);
    return state;
};