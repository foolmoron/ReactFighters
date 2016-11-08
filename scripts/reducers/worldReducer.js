import { UPDATE } from '../actions';

export default (state = {
    posX: 0,
    posY: 0,
    velX: 0,
    velY: 0,
    accelX: 0,
    accelY: 0,
    speed: 500,
}, action, fullState) => {
    switch (action.type) {
        case UPDATE:
            var dt = action.dt;
            var { posX, posY, velX, velY, accelX, accelY, speed } = state;
            velX = fullState.direction.x * speed;
            velY = fullState.direction.y * speed;
            // velX += accelX * dt;
            // velY += accelY * dt;
            posX += velX * dt;
            posY += velY * dt;
            // return new state
            return Object.assign({}, state, { posX, posY, velX, velY });
        default: 
            return state;
    }
};