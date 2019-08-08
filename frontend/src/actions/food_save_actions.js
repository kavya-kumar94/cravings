import * as APIUtil from '../util/foodsave_api_util';
export const RECEIVE_FOODSAVE = 'RECEIVE_FOODSAVE';
export const RECEIVE_FOODSAVES = 'RECEIVE_FOODSAVES';
export const REMOVE_FOODSAVE = 'REMOVE_FOODSAVE';

const receiveFoodSave = foodsave => ({
    type: RECEIVE_FOODSAVE,
    foodsave
})

const receiveFoodSaves = foodsaves => ({
    type: RECEIVE_FOODSAVES,
    foodsaves
})

const removeFoodSave = (foodsave) => ({
    type: REMOVE_FOODSAVE,
    foodsave
})

export const saveFood = foodSave => dispatch => (
    APIUtil.saveFood(foodSave).then(foodSave => dispatch(receiveFoodSave(foodSave)))
);

export const unsaveFood = (foodSave) => dispatch => (
    APIUtil.unsaveFood(foodSave).then((foodsave) => dispatch(removeFoodSave(foodsave)))
);

export const fetchFoodSaves = (userId) => dispatch => (
    APIUtil.fetchFoodSaves(userId).then((foodSaves) => dispatch(receiveFoodSaves(foodSaves)))
);

export const fetchFoodSave = (foodSave) => dispatch => (
    APIUtil.fetchFoodSave(foodSave).then(foodsave => dispatch(receiveFoodSave(foodsave)))
);
