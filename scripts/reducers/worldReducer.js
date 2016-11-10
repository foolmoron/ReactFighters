import { UPDATE, OBJECT_ADD } from '../actions';
import gemSprite from '../../sprites/gem.png';

export default (state = {
    posX: 0,
    posY: 0,
    velX: 0,
    velY: 0,
    accelX: 0,
    accelY: 0,
    speed: 500,
    objectTree: [{
        index: 0,
        name: 'root',
        parent: null,
        children: [],
        sprite: null,
        posX: 0,
        posY: 0,
        extraClasses: [],
    }],
}, action, fullState) => {
    switch (action.type) {
        case OBJECT_ADD:
            var { objectTree } = state;
            var node = { 
                index: objectTree.length,
                name: action.name,
                parent: action.parent || 0, // root is the default parent
                children: action.children || [],
                sprite: action.sprite,
                posX: action.posX,
                posY: action.posY,
                extraClasses: action.extraClasses || [],
            };
            objectTree[action.parent].children = objectTree[action.parent].children.concat(node.index);
            objectTree = objectTree.concat(node);
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