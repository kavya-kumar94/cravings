import axios from 'axios';

// window.axios = axios;

export const fetchFoods = (query) => {
    return axios.get(`/api/foods${query}`)
};

export const fetchFood = (id) => {
    // debugger
    return axios.get(`/api/foods/${id}`)
    // .then(res => {
    //     console.log(res);
    //     console.log('success')})
    //     .catch(err => {
    //         console.log(err);
    //         console.log('errored')})
};
   

