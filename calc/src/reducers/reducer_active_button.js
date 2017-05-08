export default function(state = null, action) {
    switch(action.type) {
    case 'BUTTON_CLICKED':
        return action.payload;
    }

    return state;
}