import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

import merge from 'lodash/merge';
import { RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = merge({}, state);

    switch (action.type) {


        case RECEIVE_CURRENT_USER:
            return merge({}, state, action.currentUser.users);

        case RECEIVE_USER:
            return merge({}, state, action.payload.users);

        default:
            return state;
    }
};

export default usersReducer;
