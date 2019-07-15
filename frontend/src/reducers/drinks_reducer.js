import { RECEIVE_DRINK, RECEIVE_DRINKS } from '../actions/drink_actions';

const DrinksReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_DRINKS:
            return action.drinks.data;
        case RECEIVE_DRINK:
            return action.drink.data;
        default:
            return state;
    }
};

export default DrinksReducer;