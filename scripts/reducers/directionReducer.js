import { KEY_UP, KEY_DOWN } from '../actions';
import { normalize } from '../lib/vector2';

export default (state = {
    U: false,
    D: false,
    L: false,
    R: false,
    x: 0,
    y: 0,
}, action, fullState) => {
    switch (action.type) {
        case KEY_UP:
        case KEY_DOWN:
            var { U, D, L, R, x, y } = state;
            // direction bools
            if (action.key == 'KeyW' || action.key == 'ArrowUp') { U = action.type == KEY_DOWN; }
            if (action.key == 'KeyS' || action.key == 'ArrowDown') { D = action.type == KEY_DOWN; }
            if (action.key == 'KeyA' || action.key == 'ArrowLeft') { L = action.type == KEY_DOWN; }
            if (action.key == 'KeyD' || action.key == 'ArrowRight') { R = action.type == KEY_DOWN; }
            // direction vector2
            [x, y] = normalize([L ? -1 : R ? 1 : 0, U ? -1 : D ? 1 : 0]);
            // return new state
            return Object.assign({}, state, { U, D, L, R, x, y });
        default: 
            return state;
    }
};