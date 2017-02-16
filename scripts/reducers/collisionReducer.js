import { POST_UPDATE, OBJECT_ADD, COLLECT_GEM } from '../actions';
import { magnitude } from '../lib/vector2.js';
import gemSprite from '../../sprites/gem.png';

export default (state = {
}, action) => {
    switch (action.type) {
        case POST_UPDATE:
            // vars
            var dt = action.dt;
            // new states to return later
            var world = Object.assign({}, state.world);
            var objectTree = world.objectTree.slice();
            var stats = Object.assign({}, state.stats);
            // collisions
            for (var a = 0; a < objectTree.length; a++) {
                var objA = objectTree[a];
                if (!objA.active)
                    continue;
                for (var b = 0; b < objectTree.length; b++) {
                    var objB = objectTree[b];
                    if (!objB.active || a == b)
                        continue;
                    // inter-object collisions
                }
                // single-object collisions
                switch(objA.layer) {
                    case 'gem':
                        const GEM_COLLISION_RADIUS = 50;
                        var worldSpace = [0, 0];
                        var parent = objA;
                        while (parent) {
                            worldSpace[0] += parent.posX;
                            worldSpace[1] += parent.posY;
                            parent = objectTree[parent.parent];
                        }
                        if (magnitude([worldSpace[0] - world.posX, worldSpace[1] - world.posY]) <= GEM_COLLISION_RADIUS) {
                            objA.active = false;
                            stats.gems++;
                        }
                        break;
                }
            }
            // return new state
            world.objectTree = objectTree;
            return Object.assign({}, state, { world, stats });
        default: 
            return state;
    }
};