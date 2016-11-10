import { } from '../actions';

export default (state = {
    buttons: [{
        text: 'Test1',
    },{
        text: 'Longer test right here',
    },{
        text: 'Z',
    }],
}, action, fullState) => {
    switch (action.type) {
        default: 
            return state;
    }
};