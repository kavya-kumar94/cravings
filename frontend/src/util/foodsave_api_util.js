import axios from 'axios';

export const saveFood = (foodsave) => {
    return axios.post('/api/foodsaves', foodsave);
};

export const deleteFoodSave = (foodsave) => {
    return axios.post(`/api/foodsaves'/${foodsave.id}`, foodsave);
};

export const fetchFoodSave = foodsave => {
    return axios.patch(`/api/rooms/${foodsave.id}`, foodsave);
};

export const fetchFoodSaves = (userId) => {
    return axios.get(`/api/foodsaves/${userId}`);
};