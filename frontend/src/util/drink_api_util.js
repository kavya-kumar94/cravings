import axios from 'axios';

window.axios = axios;
export const fetchDrinks = () => {
    return axios.get('/api/drinks')
};

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