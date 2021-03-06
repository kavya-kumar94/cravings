import * as APIUtil from '../util/multi_api_util';
export const RECEIVE_ROOM = 'RECEIVE_ROOM';
export const REMOVE_ROOM = 'REMOVE_ROOM';

const receiveRoom = payload => ({
    type: RECEIVE_ROOM,
    room: payload.data
})

const removeRoom = (payload) => ({
    type: REMOVE_ROOM,
    room: payload.data
})

export const createRoom = room => dispatch => (
    APIUtil.createRoom(room).then(room => dispatch(receiveRoom(room)))
);

export const deleteRoom = (room) => dispatch => (
    APIUtil.deleteRoom(room).then((room) => dispatch(removeRoom(room)))
);

export const updateRoom = (room) => dispatch => (
    APIUtil.updateRoom(room).then((room) => dispatch(receiveRoom(room)))
);

export const fetchRoom = (roomId) => dispatch => (
    APIUtil.fetchRoom(roomId).then(room => dispatch(receiveRoom(room)))
);
