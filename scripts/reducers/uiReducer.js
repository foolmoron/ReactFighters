import { } from '../actions';

export default (state = {
    buttons: [{
        text: 'Test1',
    },{
        text: 'Longer test right here',
    },{
        text: 'Z',
    },{
        text: 'Z2',
    },{
        text: 'Z3',
    },{
        text: 'Z4',
    }],
}, action, fullState) => {
    switch (action.type) {
        default: 
            return state;
    }
};