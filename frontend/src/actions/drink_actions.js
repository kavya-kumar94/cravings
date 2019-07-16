import * as DrinkApiUtil from '../util/drink_api_util';

export const RECEIVE_DRINKS = "RECEIVE_DRINKS";
export const RECEIVE_DRINK = "RECEIVE_DRINK";

export const receiveDrink = (drink) => ({
    type: RECEIVE_DRINK,
    drink
});

export const receiveDrinks = (drinks) => ({
    type: RECEIVE_DRINKS,
    drinks
});

export const fetchDrinks = (query) => dispatch => (
    DrinkApiUtil.fetchDrinks(query)
        .then(drinks => dispatch(receiveDrinks(drinks)))
        .catch(err => console.log(err))
);

export const fetchDrink = (id) => dispatch => (
    DrinkApiUtil.fetchDrink(id)
        .then(drink => dispatch(receiveDrink(drink)))
        .catch(err => console.log(err))
);
