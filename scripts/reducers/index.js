import directionReducer from './directionReducer.js';
import worldReducer from './worldReducer.js';
import characterReducer from './characterReducer.js';

// combine reducers in a custom way to pass an extra 3rd parameter that contains the entire state
export default (state = {}, action) => {
    return {
        direction: directionReducer(state.direction, action, state),
        world: worldReducer(state.world, action, state),
        character: characterReducer(state.character, action, state),
    }
};