import axios from 'axios';

export const saveDrink = (drinksave) => {
    return axios.post('/api/drinksaves', drinksave);
};

export const unsaveDrink = (drinksave) => {
    return axios.post(`/api/drinksaves/${drinksave.id}`, drinksave);
};

export const fetchDrinkSave = drinksave => {
    return axios.patch(`/api/drinksaves/${drinksave.id}`, drinksave);
};

export const fetchDrinkSaves = (userId) => {
    return axios.get(`/api/drinksaves/${userId}`);
};