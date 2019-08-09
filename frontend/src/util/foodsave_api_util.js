import axios from 'axios';

export const saveFood = (foodsave) => {
    return axios.post('/api/foodsaves', foodsave);
};

export const unsaveFood = (foodsave) => {
    return axios.delete(`/api/foodsaves/${String(foodsave._id)}`, foodsave);
};

export const fetchFoodSave = (foodsave) => {
    return axios.get(`/api/foodsaves/${foodsave.foodId}?userId=${foodsave.userId}`);
};

export const fetchFoodSaves = (userId) => {
    return axios.get(`/api/foodsaves/?userId=${userId}`);
};