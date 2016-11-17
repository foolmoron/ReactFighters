import { UPDATE, OBJECT_ADD, COLLECT_GEM } from '../actions';
import { magnitude } from '../lib/vector2.js';
import gemSprite from '../../sprites/gem.png';

export default (state = {
}, action) => {
    switch (action.type) {
        case UPDATE:
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
                        // TODO: TREE-SPACE TRANSFORMATION
                        var screenSpace = [world.posX + (window.innerWidth/2), world.posY + (window.innerHeight/2)];
                        var parent = objA;
                        while (parent) {
                            screenSpace[0] -= parent.posX;
                            screenSpace[1] -= parent.posY;
                            parent = objectTree[parent.parent];
                        }
                        if (magnitude(screenSpace) <= GEM_COLLISION_RADIUS) {
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