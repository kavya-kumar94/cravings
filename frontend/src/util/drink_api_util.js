import axios from 'axios';

export const fetchDrinks = () => {
    return axios.get('/api/drinks')
};

export const fetchDrink = (id) => {
    return axios.get(`/api/drinks/${id}`)
};


// export const fetchDrinks = (userData) => {
//     return axios.get('/api/drinks',
//     query: {
            // tired: userData.tired,
            // sweet: userData.sweet,


//      })
// }

// export const fetchDrinks = () => {
//     return axios.get('api/drinks',
//         params: {
//             id: 123
//         }
//     )
// }