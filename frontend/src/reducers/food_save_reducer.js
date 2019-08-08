import { 
    RECEIVE_FOODSAVE,
    RECEIVE_FOODSAVES, 
    REMOVE_FOODSAVE 
} from '../actions/food_save_actions';

const FoodSaveReducer = (state= {}, action) => {
    Object.freeze(state);
    
    switch(action.type) {
        case RECEIVE_FOODSAVE:
            return Object.assign({}, state, {[action.foodsave.id]: action.foodsave.id});
        case RECEIVE_FOODSAVES:
            return Object.assign({}, state, action.foodsaves);
        case REMOVE_FOODSAVE:
            let newState = merge({}, state);
            delete newState[action.foodsave.id];
            return newState;
        default:
            return state;
    }
}

export default FoodSaveReducer;