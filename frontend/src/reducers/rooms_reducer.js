import {
    RECEIVE_ROOM,
    REMOVE_ROOM
} from "../actions/room_actions";

const roomsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ROOM:
            return Object.assign({}, { [action.room.id]: action.room} );
        case REMOVE_ROOM:
            let newState = Object.assign({}, oldState);
            delete newState[action.room.id]
            return newState;
        default:
            return oldState;
    }
}

export default roomsReducer;