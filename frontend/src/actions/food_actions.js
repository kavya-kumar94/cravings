import * as FoodApiUtil from '../util/food_api_util';

export const RECEIVE_FOODS = "RECEIVE_FOODS";
export const RECEIVE_FOOD = "RECEIVE_FOOD";

// loading page:

export const START_LOADING_ALL_FOODS = 'START_LOADING_ALL_FOODS';
export const START_LOADING_SINGLE_FOOD = 'START_LOADING_SINGLE_FOOD';

export const startLoadingAllFoods = () => ({
    type: START_LOADING_ALL_FOODS
});

export const startLoadingSingleFood = () => ({
    type: START_LOADING_SINGLE_FOOD
})
// end of loading actions

export const receiveFood = food => ({
    type: RECEIVE_FOOD,
    food
});

export const receiveFoods = foods => ({
    type: RECEIVE_FOODS,
    foods
});

export const fetchFoods = (query) => dispatch => {

    // loading
    dispatch(startLoadingAllFoods());

    return FoodApiUtil.fetchFoods(query)
        .then(foods => dispatch(receiveFoods(foods)))
        .catch(err => console.log(err))
};

export const fetchFood = (id) => dispatch => (
    FoodApiUtil.fetchFood(id)
        .then(food => dispatch(receiveFood(food)))
        .catch(err => console.log(err))
);
