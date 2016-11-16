import { COLLECT_GEM } from '../actions';

export default (state = {
    gems: 0,
}, action, fullState) => {
    switch (action.type) {
        case COLLECT_GEM:
            return Object.assign({}, state, { gems: state.gems + 1 });
        default: 
            return state;
    }
};