import {
    RECEIVE_ROOM,
    REMOVE_ROOM
} from "../actions/room_actions";

const roomsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ROOM:
            return action.room;
        case REMOVE_ROOM:
            return null;
        default:
            return oldState;
    }
}

export default roomsReducer;