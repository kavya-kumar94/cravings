import { RECEIVE_DRINK, RECEIVE_DRINKS } from '../actions/drink_actions';

const DrinksReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_DRINKS:
            return Object.assign({}, state, action.drinks.data);
        case RECEIVE_DRINK:
            return Object.assign({}, state, {[action.drink.data.id]: action.drink.data});
        default:
            return state;
    }
};

export default DrinksReducer;