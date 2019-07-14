import { getFoods, getFood } from '../util/food_api_util';

export const RECEIVE_FOODS = "RECEIVE_FOODS";
export const RECEIVE_FOOD = "RECEIVE_FOOD";

export const receiveFood = (food) => ({
    type: RECEIVE_FOOD,
    food
});

export const receiveFoods = (foods) => ({
    type: RECEIVE_FOODS,
    foods
});

export const fetchFoods = () => dispatch => (
    getFoods()
        .then(foods => dispatch(receiveFoods(foods)))
        .catch(err => console.log(err))
);

export const fetchFood = (id) => dispatch => (
    getFood(id)
        .then(food => dispatch(receiveFood(food)))
        .catch(err => console.log(err))
);
