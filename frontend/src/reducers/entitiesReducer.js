import { combineReducers } from 'redux';
import foodsReducer from './foods_reducer';
import drinksReducer from './drinks_reducer';
import foodSavesReducer from './food_save_reducer';
import drinkSavesReducer from './drink_save_reducer';
// import usersReducer from './users_reducer';



const entitiesReducer = combineReducers({
    // users: usersReducer
    foods: foodsReducer,
    drinks: drinksReducer,
    foodSaves: foodSavesReducer,
    drinkSaves: drinkSavesReducer
});

export default entitiesReducer;