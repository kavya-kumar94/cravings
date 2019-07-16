import axios from 'axios';

window.axios = axios;

export const fetchFoods = () => {
    return axios.get('/api/foods/')
};

export const fetchFood = (id) => {
    return axios.get(`/api/foods/${id}`)
};
   