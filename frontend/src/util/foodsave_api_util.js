import axios from 'axios';

export const saveFood = (foodsave) => {
    return axios.post('/api/foodsaves', foodsave);
};

export const unsaveFood = (foodsave) => {
    return axios.delete(`/api/foodsaves/${foodsave.id}`, foodsave);
};

export const fetchFoodSave = foodsave => {
    return axios.get(`/api/foodsaves/${foodsave.id}`, foodsave);
};

export const fetchFoodSaves = (userId) => {
    return axios.get(`/api/foodsaves/${userId}`);
};