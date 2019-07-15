import axios from 'axios';

export const fetchDrinks = () => {
    return axios.get('/api/drinks')
};

export const fetchDrink = (id) => {
    return axios.get(`/api/drinks/${id}`)
};
