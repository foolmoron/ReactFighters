import { UPDATE, OBJECT_ADD } from '../actions';
import gemSprite from '../../sprites/gem.png';

var initialObjects = [];
for (var i = 0; i < 10; i++) {
    initialObjects.push({ 
        sprite: gemSprite,
        posX: (Math.random() * 1000 + 200) * (Math.random() < 0.5 ? -1 : 1),
        posY: (Math.random() * 1000 + 200) * (Math.random() < 0.5 ? -1 : 1),
        extraClasses: ['pulseAndSway'],
    });
}

export default (state = {
    posX: 0,
    posY: 0,
    velX: 0,
    velY: 0,
    accelX: 0,
    accelY: 0,
    speed: 500,
    gameObjects: initialObjects,
}, action, fullState) => {
    switch (action.type) {
        case OBJECT_ADD:
            var { gameObjects } = state;
            gameObjects.push({ id: gameObjects.length + 1, sprite: action.sprite, posX: action.posX, posY: action.posY, extraClasses: action.extraClasses });
            return Object.assign({}, state, { gameObjects });
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