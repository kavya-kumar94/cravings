import axios from 'axios';

export const createRoom = (room) => {
    return axios.post('/api/rooms', room);
};

export const deleteRoom = (room) => {
    return axios.post(`/api/rooms'/${room.id}`, room);
};

export const updateRoom = room => {
    return axios.patch(`/api/rooms/${room.roomName}`, room);
};

export const fetchRoom = (roomId) => {
    return axios.get(`/api/rooms/${roomId}`);
};