import axios from 'axios';

export const getDrinks = () => {
    return axios.get('/api/drinks')
};

export const getDrink = (id) => {
    return axios.get(`/api/drinks/${id}`)
};
