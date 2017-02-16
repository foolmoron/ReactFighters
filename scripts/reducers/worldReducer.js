import { UPDATE, OBJECT_ADD, COLLECT_GEM } from '../actions';
import { magnitude } from '../lib/vector2.js';
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
        active: true,
        name: 'root',
        layer: null,
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
                active: action.active || true,
                name: action.name,
                layer: action.layer,
                parent: action.parent || 0, // root is the default parent
                children: action.children || [],
                sprite: action.sprite,
                posX: action.posX,
                posY: action.posY,
                extraClasses: action.extraClasses || [],
            };
            objectTree[node.parent].children = objectTree[node.parent].children.concat(node.index);
            objectTree = objectTree.concat(node);
            return Object.assign({}, state, { objectTree });
        case UPDATE:
            var dt = action.dt;
            var { posX, posY, velX, velY, accelX, accelY, speed, objectTree } = state;
            objectTree = objectTree.slice();
            // character motion
            {
                velX = fullState.direction.x * speed;
                velY = fullState.direction.y * speed;
                // velX += accelX * dt;
                // velY += accelY * dt;
                posX += velX * dt;
                posY += velY * dt;
            }
            // return new state
            return Object.assign({}, state, { posX, posY, velX, velY, objectTree });
        default: 
            return state;
    }
};