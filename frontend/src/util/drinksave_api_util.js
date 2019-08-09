import axios from 'axios';

export const saveDrink = (drinksave) => {
    return axios.post('/api/drinksaves', drinksave);
};

export const unsaveDrink = (drinksave) => {
    return axios.delete(`/api/drinksaves/${drinksave.id}`, drinksave);
};

export const fetchDrinkSave = drinksave => {
    return axios.get(`/api/drinksaves/${drinksave.drinkId}?userId=${drinksave.userId}`);
};

export const fetchDrinkSaves = (userId) => {
    return axios.get(`/api/drinksaves/?userId=${userId}`);
};