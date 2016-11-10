import { UPDATE, OBJECT_ADD } from '../actions';
import gemSprite from '../../sprites/gem.png';

var initialTree = [{
    id: 0,
    name: 'root',
    parent: null,
    children: [],
    sprite: null,
    posX: 0,
    posY: 0,
    extraClasses: [],
}];
for (var i = 0; i < 10; i++) {
    initialTree[0].children.push(i + 1);
    initialTree.push({
        id: i + 1,
        name: 'gem' + i,
        parent: 0,
        children: [],
        sprite: gemSprite,
        posX: (Math.random() * 1000 + 200) * (Math.random() < 0.5 ? -1 : 1),
        posY: (Math.random() * 1000 + 200) * (Math.random() < 0.5 ? -1 : 1),
        extraClasses: ['pulseAndSway'],
    });
}
for (var i = 10; i < 13; i++) {
    initialTree[3].children.push(i + 1);
    initialTree.push({
        id: i + 1,
        name: 'gem' + i,
        parent: 3,
        children: [],
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
    objectTree: initialTree,
}, action, fullState) => {
    switch (action.type) {
        case OBJECT_ADD:
            var { objectTree } = state;
            objectTree.push({ 
                id: objectTree.length + 1,
                name: action.name,
                parent: action.parent || 0, // root is the default parent
                children: action.children || [],
                sprite: action.sprite,
                posX: action.posX,
                posY: action.posY,
                extraClasses: action.extraClasses || [],
            });
            return Object.assign({}, state, { objectTree });
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