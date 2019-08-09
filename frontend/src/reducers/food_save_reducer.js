import { 
    RECEIVE_FOODSAVE,
    RECEIVE_FOODSAVES, 
    REMOVE_FOODSAVE 
} from '../actions/food_save_actions';

import { merge } from 'lodash';

const FoodSaveReducer = (state= {}, action) => {
    Object.freeze(state);
    
    switch(action.type) {
        case RECEIVE_FOODSAVE:
            // return Object.assign({}, state, {[action.foodsave._id]: action.foodsave});
            return {[action.foodsave._id]: action.foodsave};
        case RECEIVE_FOODSAVES:
            debugger;
            return Object.assign({}, state, action.foodsaves);
        case REMOVE_FOODSAVE:
            let newState = merge({}, state);
            delete newState[action.foodsave._id];
            return newState;
        default:
            return state;
    }
}

export default FoodSaveReducer;