import axios from 'axios';

export const fetchDrinks = (query) => {
    return axios.get(`/api/drinks${query}`)
};


export const fetchDrink = (id) => {
    return axios.get(`/api/drinks/${id}`)
};




