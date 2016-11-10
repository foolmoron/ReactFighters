import { UPDATE } from '../actions';

export default (state = {
    angle: 0,
}, action, fullState) => {
    switch (action.type) {
        case UPDATE:
            return Object.assign({}, state, { angle: Math.atan2(fullState.direction.lastY, fullState.direction.lastX) * 180 / Math.PI });
        default: 
            return state;
    }
};