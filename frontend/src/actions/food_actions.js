import * as FoodApiUtil from '../util/food_api_util';

export const RECEIVE_FOODS = "RECEIVE_FOODS";
export const RECEIVE_FOOD = "RECEIVE_FOOD";

export const receiveFood = food => ({
    type: RECEIVE_FOOD,
    food
});

export const receiveFoods = payload => ({
    type: RECEIVE_FOODS,
    payload
});

export const fetchFoods = () => dispatch => (
    FoodApiUtil.fetchFoods()
        .then(foods => dispatch(receiveFoods(foods)))
        .catch(err => console.log(err))
);

export const fetchFood = (id) => dispatch => (
    FoodApiUtil.fetchFood(id)
        .then(food => dispatch(receiveFood(food)))
        .catch(err => console.log(err))
);
