import axios from 'axios';

export const getFoods = () => {
    return axios.get('/api/foods')
};

export const getFood = (id) => {
    return axios.get(`/api/foods/${id}`)
};
   