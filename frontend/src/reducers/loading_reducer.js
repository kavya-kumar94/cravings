import {
    RECEIVE_FOODS,
    RECEIVE_FOOD,
    START_LOADING_ALL_FOODS,
    START_LOADING_SINGLE_FOOD
} from '../actions/food_actions';

import {
    RECEIVE_DRINKS,
    RECEIVE_DRINK,
    START_LOADING_ALL_DRINKS,
    START_LOADING_SINGLE_DRINK
} from '../actions/drink_actions';

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
            return Object.assign({}, state, { detailLoading: false });
        case START_LOADING_SINGLE_FOOD:
            return Object.assign({}, state, { detailLoading: true });
        case RECEIVE_DRINKS:
            return Object.assign({}, state, { indexLoading: false });
        case START_LOADING_ALL_DRINKS:
            return Object.assign({}, state, { indexLoading: true });
        case RECEIVE_DRINK:
            return Object.assign({}, state, { detailLoading: false });
        case START_LOADING_SINGLE_DRINK:
            return Object.assign({}, state, { detailLoading: true });
        default:
            return state;
    }
};

export default loadingReducer;