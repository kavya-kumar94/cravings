import axios from 'axios';

<<<<<<< HEAD
window.axios = axios;
export const fetchDrinks = () => {
    return axios.get('/api/drinks')
=======
export const fetchDrinks = (location) => {
    return axios.get(`/api/drinks${location}`)
    // return axios.get(`/api/drinks`,location)
>>>>>>> master
};

// export const fetchDrinks = () => {
//     return axios.get(`/api/drinks/?sick=true`)
// };

export const fetchDrink = (id) => {
    return axios.get(`/api/drinks/${id}`)
};


// export const fetchDrinks = (userData) => {
//     return (
//         axios.get('/api/drinks', {

//             query: {
//                 tired: userData.tired,
//                 sweet: userData.sweet,
//                 caffeine: userData.caffeine,
//                 aromatic: userData.aromatic
//             }
//         })
//     )
// }

// export const fetchDrinks = (userData) => {
//     return axios.get('api/drinks',
//         params: {
//             
//         }
//     )
// }