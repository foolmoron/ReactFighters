import { KEY_UP, KEY_DOWN, MOUSE_UP, MOUSE_DOWN, MOUSE_MOVE } from '../actions';
import { normalize } from '../lib/vector2';

export default (state = {
    U: false,
    D: false,
    L: false,
    R: false,
    M: false,
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
}, action, fullState) => {
    switch (action.type) {
        case KEY_UP:
        case KEY_DOWN:
            var { U, D, L, R, x, y, lastX, lastY } = state;
            // direction bools
            if (action.key == 'KeyW' || action.key == 'ArrowUp') { U = action.type == KEY_DOWN; }
            if (action.key == 'KeyS' || action.key == 'ArrowDown') { D = action.type == KEY_DOWN; }
            if (action.key == 'KeyA' || action.key == 'ArrowLeft') { L = action.type == KEY_DOWN; }
            if (action.key == 'KeyD' || action.key == 'ArrowRight') { R = action.type == KEY_DOWN; }
            // direction vector2
            var [x, y] = normalize([L ? -1 : R ? 1 : 0, U ? -1 : D ? 1 : 0]);
            // last non-zero direction
            if (x != 0 || y != 0) {
                lastX = x;
                lastY = y;
            }
            // return new state
            return Object.assign({}, state, { U, D, L, R, x, y, lastX, lastY });
        case MOUSE_UP:
            // disable movement
            return Object.assign({}, state, { x: 0, y: 0, M: false });
        case MOUSE_DOWN:
        case MOUSE_MOVE:
            var { x, y, lastX, lastY, M } = state;
            // mouse bool
            M = M || action.type == MOUSE_DOWN;
            // direction is relative to center of viewport
            if (M) { // only when mouse is down
                var w = window.innerWidth;
                var h = window.innerHeight;
                [x, y] = normalize([action.mouseX - (w/2), action.mouseY - (h/2)]);
            }
            // last non-zero direction
            if (x != 0 || y != 0) {
                lastX = x;
                lastY = y;
            }
            // return new state
            return Object.assign({}, state, { x, y, lastX, lastY, M });
        default: 
            return state;
    }
};