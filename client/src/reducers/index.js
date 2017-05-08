import { combineReducers } from 'redux';
import ButtonsReducer from './reducer_buttons';
import ActiveButton from './reducer_active_button';
import Numbers from './reducer_numbers';

const rootReducer = combineReducers({
    buttons: ButtonsReducer,
    activeButton: ActiveButton,
    numbers: Numbers
});

export default rootReducer;