import * as APIUtil from '../util/drinksave_api_util';
export const RECEIVE_DRINKSAVE = 'RECEIVE_DRINKSAVE';
export const RECEIVE_DRINKSAVES = 'RECEIVE_DRINKSAVES';
export const REMOVE_DRINKSAVE = 'REMOVE_DRINKSAVE';

const receiveDrinkSave = drinksave => ({
    type: RECEIVE_DRINKSAVE,
    drinksave
})

const receiveDrinkSaves = drinksaves => ({
    type: RECEIVE_DRINKSAVES,
    drinksaves
})

const removeDrinkSave = (drinksave) => ({
    type: REMOVE_DRINKSAVE,
    drinksave
})

export const saveDrink = drinkSave => dispatch => (
    APIUtil.saveDrink(drinkSave).then(drinkSave => dispatch(receiveDrinkSave(drinkSave)))
);

export const unsaveDrink = (drinksave) => dispatch => (
    APIUtil.unsaveDrink(drinksave).then((drinksave) => dispatch(removeDrinkSave(drinksave)))
);

export const fetchDrinkSaves = (userId) => dispatch => (
    APIUtil.fetchDrinkSaves(userId).then((drinkSaves) => dispatch(receiveDrinkSaves(drinkSaves)))
);

export const fetchDrinkSave = (drinksave) => dispatch => (
    APIUtil.fetchDrinkSave(drinksave).then(drinksave => dispatch(receiveDrinkSave(drinksave)))
);
