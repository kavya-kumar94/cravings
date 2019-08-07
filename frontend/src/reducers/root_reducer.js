import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import uiReducer from './ui_reducer';
import entitiesReducer from './entitiesReducer';
import roomsReducer from './rooms_reducer';

const RootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    ui: uiReducer,
    room: roomsReducer
});

export default RootReducer;
