import axios from 'axios';

export const fetchFoods = (query) => {
    return axios.get(`/api/foods${query}`)
};

export const fetchFood = (id) => {
    return axios.get(`/api/foods/${id}`)
};
   

