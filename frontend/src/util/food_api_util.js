import axios from 'axios';

window.axios = axios;

export const fetchFoods = (query) => {
    return axios.get(`/api/foods/${query}`)
};

export const fetchFood = (id) => {
    return axios.get(`/api/foods/${id}`)
};
   
// delete this later: this is for Kavya <3

export const getFoods = () => {
    return axios.get(`/api/foods`)
};