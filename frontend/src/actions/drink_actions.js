import * as DrinkApiUtil from '../util/drink_api_util';

export const RECEIVE_DRINKS = "RECEIVE_DRINKS";
export const RECEIVE_DRINK = "RECEIVE_DRINK";

export const receiveFood = (food) => ({
    type: RECEIVE_DRINK,
    food
});

export const receiveFoods = (foods) => ({
    type: RECEIVE_DRINKS,
    foods
});

export const fetchDrinks = () => dispatch => (
    DrinkApiUtil.fetchDrinks()
        .then(foods => dispatch(receiveFoods(foods)))
        .catch(err => console.log(err))
);

export const fetchDrink = (id) => dispatch => (
    DrinkApiUtil.fetchDrink(id)
        .then(food => dispatch(receiveFood(food)))
        .catch(err => console.log(err))
);
