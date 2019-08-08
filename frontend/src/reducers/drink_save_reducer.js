import {
    RECEIVE_DRINKSAVE,
    RECEIVE_DRINKSAVES,
    REMOVE_DRINKSAVE
} from '../actions/drink_save_actions';

const DrinkSaveReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_DRINKSAVE:
            return Object.assign({}, state, { [action.drinksave.id]: action.drinksave });
        case RECEIVE_DRINKSAVES:
            return Object.assign({}, state, action.drinksaves);
        case REMOVE_DRINKSAVE:
            let newState = merge({}, state);
            delete newState[action.drinksave.id];
            return newState;
        default:
            return state;
    }
}

export default DrinkSaveReducer;