import {
    RECEIVE_FOODS,
    RECEIVE_FOOD,
    START_LOADING_ALL_FOODS,
    START_LOADING_SINGLE_FOOD
} from '../actions/food_actions';

const initialState = {
    indexLoading: false,
    detailLoading: false
};

const loadingReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FOODS:
            return Object.assign({}, state, { indexLoading: false });
        case START_LOADING_ALL_FOODS:
            return Object.assign({}, state, { indexLoading: true });
        case RECEIVE_FOOD:
            // debugger
            return Object.assign({}, state, { detailLoading: false });
        case START_LOADING_SINGLE_FOOD:
            return Object.assign({}, state, { detailLoading: true })
        default:
            return state;
    }
};

export default loadingReducer;