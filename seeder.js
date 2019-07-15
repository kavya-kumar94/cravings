// const Food = require("./models/Food");
// const Drink = require("./models/Drink")
// const apiKey = require('./config/keys').YelpApiKey;

// const yelp = require('yelp-fusion');
// const client = yelp.client(apiKey);

// const seed = (() => {
//     Food.collection.deleteMany({});


//     const searchBreakfastRequest = {
//         term: 'Breakfast & Brunch',
//         limit: 10,
//         location: 'san francisco, ca'
//     };
//     const searchBuffetRequest = {
//         term: 'Buffets',
//         limit: 10,
//         location: 'san francisco, ca'
//     };
//     const searchItalianRequest = {
//         term: 'Italian',
//         limit: 10,
//         location: 'san francisco, ca'
//     };
//     const searchJapaneseRequest = {
//         term: 'Japanese',
//         limit: 10,
//         location: 'san francisco, ca'
//     };
//     const searchMexicanRequest = {
//         term: 'Japanese',
//         limit: 10,
//         location: 'san francisco, ca'
//     };
//     const searchChineseRequest = {
//         term: 'Japanese',
//         limit: 10,
//         location: 'san francisco, ca'
//     };
//     const searchIndianRequest = {
//         term: 'Japanese',
//         limit: 10,
//         location: 'san francisco, ca'
//     };
//     const searchKoreanRequest = {
//         term: 'Japanese',
//         limit: 10,
//         location: 'san francisco, ca'
//     };
//     const searchPizzaRequest = {
//         term: 'Japanese',
//         limit: 10,
//         location: 'san francisco, ca'
//     };
//     const searchSandwichesRequest = {
//         term: 'Japanese',
//         limit: 10,
//         location: 'san francisco, ca'
//     };
//     const searchSoupsRequest = {
//         term: 'Japanese',
//         limit: 10,
//         location: 'san francisco, ca'
//     };
//     const searchSaladRequest = {
//         term: 'Japanese',
//         limit: 10,
//         location: 'san francisco, ca'
//     };
//     const searchFastFoodRequest = {
//         term: 'Japanese',
//         limit: 10,
//         location: 'san francisco, ca'
//     };

//     client.search(searchBreakfastRequest).then(response => {
//         response.jsonBody.businesses.forEach(rest => {
//             const food = new Food({
//                 id: rest.id,
//                 name: rest.name,
//                 imageUrl: rest.image_url,
//                 category: rest.categories[0].title,
//                 rating: rest.rating,
//                 lat: rest.coordinates.latitude,
//                 lng: rest.coordinates.longitude,
//                 price: rest.price,
//                 address: rest.location.address1,
//                 city: rest.location.city,
//                 zipCode: rest.location.zip_code,
//                 country: rest.location.country,
//                 state: rest.location.state,
//                 phone: rest.display_phone,
//                 sweet: true,
//                 spicy: false,
//                 salty: true,
//                 savory: true,
//                 hot: true,
//                 cold: false,
//                 healthy: true,
//                 junk: true,
//                 sad: false,
//                 happy: true,
//                 hangry: false,
//                 sick: false,
//                 celebratory: true,
//                 stressed: false,
//                 adventurous: false
//             });
//             food.save();
//         })
//     })
//     client.search(searchBuffetRequest).then(response => {
//         response.jsonBody.businesses.forEach(rest => {
//             const food = new Food({
//                 id: rest.id,
//                 name: rest.name,
//                 imageUrl: rest.image_url,
//                 category: rest.categories[0].title,
//                 rating: rest.rating,
//                 lat: rest.coordinates.latitude,
//                 lng: rest.coordinates.longitude,
//                 price: rest.price,
//                 address: rest.location.address1,
//                 city: rest.location.city,
//                 zipCode: rest.location.zip_code,
//                 country: rest.location.country,
//                 state: rest.location.state,
//                 phone: rest.display_phone,
//                 sweet: true,
//                 spicy: true,
//                 salty: true,
//                 savory: true,
//                 hot: true,
//                 cold: true,
//                 healthy: false,
//                 junk: true,
//                 sad: true,
//                 happy: true,
//                 hangry: true,
//                 sick: false,
//                 celebratory: true,
//                 stressed: true,
//                 adventurous: true
//             });
//             food.save();
//         })
//     })
//     client.search(searchItalianRequest).then(response => {
//         response.jsonBody.businesses.forEach(rest => {
//             const food = new Food({
//                 id: rest.id,
//                 name: rest.name,
//                 imageUrl: rest.image_url,
//                 category: rest.categories[0].title,
//                 rating: rest.rating,
//                 lat: rest.coordinates.latitude,
//                 lng: rest.coordinates.longitude,
//                 price: rest.price,
//                 address: rest.location.address1,
//                 city: rest.location.city,
//                 zipCode: rest.location.zip_code,
//                 country: rest.location.country,
//                 state: rest.location.state,
//                 phone: rest.display_phone,
//                 sweet: false,
//                 spicy: false,
//                 salty: true,
//                 savory: true,
//                 hot: true,
//                 cold: false,
//                 healthy: false,
//                 junk: true,
//                 sad: false,
//                 happy: true,
//                 hangry: false,
//                 sick: false,
//                 celebratory: false,
//                 stressed: true,
//                 adventurous: false
//             });
//             food.save();
//         })
//     })
    
//     client.search(searchJapaneseRequest).then(response => {
//         response.jsonBody.businesses.forEach(rest => {
//             const food = new Food({
//                 id: rest.id,
//                 name: rest.name,
//                 imageUrl: rest.image_url,
//                 category: rest.categories[0].title,
//                 rating: rest.rating,
//                 lat: rest.coordinates.latitude,
//                 lng: rest.coordinates.longitude,
//                 price: rest.price,
//                 address: rest.location.address1,
//                 city: rest.location.city,
//                 zipCode: rest.location.zip_code,
//                 country: rest.location.country,
//                 state: rest.location.state,
//                 phone: rest.display_phone,
//                 sweet: false,
//                 spicy: false,
//                 salty: true,
//                 savory: true,
//                 hot: true,
//                 cold: true,
//                 healthy: true,
//                 junk: false,
//                 sad: false,
//                 happy: false,
//                 hangry: false,
//                 sick: false,
//                 celebratory: false,
//                 stressed: true,
//                 adventurous: false
//             });
//             food.save();
//         })
//     })
//     client.search(searchMexicanRequest).then(response => {
//         response.jsonBody.businesses.forEach(rest => {
//             const food = new Food({
//                 id: rest.id,
//                 name: rest.name,
//                 imageUrl: rest.image_url,
//                 category: rest.categories[0].title,
//                 rating: rest.rating,
//                 lat: rest.coordinates.latitude,
//                 lng: rest.coordinates.longitude,
//                 price: rest.price,
//                 address: rest.location.address1,
//                 city: rest.location.city,
//                 zipCode: rest.location.zip_code,
//                 country: rest.location.country,
//                 state: rest.location.state,
//                 phone: rest.display_phone,
//                 sweet: false,
//                 spicy: true,
//                 salty: true,
//                 savory: true,
//                 hot: true,
//                 cold: false,
//                 healthy: false,
//                 junk: true,
//                 sad: false,
//                 happy: true,
//                 hangry: true,
//                 sick: false,
//                 celebratory: false,
//                 stressed: true,
//                 adventurous: false
//             });
//             food.save();
//         })
//     })
//     client.search(searchChineseRequest).then(response => {
//         response.jsonBody.businesses.forEach(rest => {
//             const food = new Food({
//                 id: rest.id,
//                 name: rest.name,
//                 imageUrl: rest.image_url,
//                 category: rest.categories[0].title,
//                 rating: rest.rating,
//                 lat: rest.coordinates.latitude,
//                 lng: rest.coordinates.longitude,
//                 price: rest.price,
//                 address: rest.location.address1,
//                 city: rest.location.city,
//                 zipCode: rest.location.zip_code,
//                 country: rest.location.country,
//                 state: rest.location.state,
//                 phone: rest.display_phone,
//                 sweet: true,
//                 spicy: true,
//                 salty: true,
//                 savory: true,
//                 hot: true,
//                 cold: false,
//                 healthy: false,
//                 junk: true,
//                 sad: true,
//                 happy: true,
//                 hangry: true,
//                 sick: true,
//                 celebratory: true,
//                 stressed: true,
//                 adventurous: true
//             });
//             food.save();
//         })
//     })
//     client.search(searchIndianRequest).then(response => {
//         response.jsonBody.businesses.forEach(rest => {
//             const food = new Food({
//                 id: rest.id,
//                 name: rest.name,
//                 imageUrl: rest.image_url,
//                 category: rest.categories[0].title,
//                 rating: rest.rating,
//                 lat: rest.coordinates.latitude,
//                 lng: rest.coordinates.longitude,
//                 price: rest.price,
//                 address: rest.location.address1,
//                 city: rest.location.city,
//                 zipCode: rest.location.zip_code,
//                 country: rest.location.country,
//                 state: rest.location.state,
//                 phone: rest.display_phone,
//                 sweet: false,
//                 spicy: true,
//                 salty: true,
//                 savory: true,
//                 hot: true,
//                 cold: false,
//                 healthy: false,
//                 junk: false,
//                 sad: false,
//                 happy: true,
//                 hangry: true,
//                 sick: false,
//                 celebratory: true,
//                 stressed: false,
//                 adventurous: true
//             });
//             food.save();
//         })
//     })
//     client.search(searchKoreanRequest).then(response => {
//         response.jsonBody.businesses.forEach(rest => {
//             const food = new Food({
//                 id: rest.id,
//                 name: rest.name,
//                 imageUrl: rest.image_url,
//                 category: rest.categories[0].title,
//                 rating: rest.rating,
//                 lat: rest.coordinates.latitude,
//                 lng: rest.coordinates.longitude,
//                 price: rest.price,
//                 address: rest.location.address1,
//                 city: rest.location.city,
//                 zipCode: rest.location.zip_code,
//                 country: rest.location.country,
//                 state: rest.location.state,
//                 phone: rest.display_phone,
//                 sweet: false,
//                 spicy: true,
//                 salty: true,
//                 savory: true,
//                 hot: true,
//                 cold: false,
//                 healthy: true,
//                 junk: true,
//                 sad: false,
//                 happy: true,
//                 hangry: true,
//                 sick: true,
//                 celebratory: true,
//                 stressed: true,
//                 adventurous: true,
//             });
//             food.save();
//         })
//     })
//     client.search(searchPizzaRequest).then(response => {
//         response.jsonBody.businesses.forEach(rest => {
//             const food = new Food({
//                 id: rest.id,
//                 name: rest.name,
//                 imageUrl: rest.image_url,
//                 category: rest.categories[0].title,
//                 rating: rest.rating,
//                 lat: rest.coordinates.latitude,
//                 lng: rest.coordinates.longitude,
//                 price: rest.price,
//                 address: rest.location.address1,
//                 city: rest.location.city,
//                 zipCode: rest.location.zip_code,
//                 country: rest.location.country,
//                 state: rest.location.state,
//                 phone: rest.display_phone,
//                 sweet: false,
//                 spicy: true,
//                 salty: true,
//                 savory: true,
//                 hot: true,
//                 cold: false,
//                 healthy: false,
//                 junk: true,
//                 sad: true,
//                 happy: true,
//                 hangry: true,
//                 sick: false,
//                 celebratory: true,
//                 stressed: true,
//                 adventurous: false,
//             });
//             food.save();
//         })
//     })
//     client.search(searchSandwichesRequest).then(response => {
//         response.jsonBody.businesses.forEach(rest => {
//             const food = new Food({
//                 id: rest.id,
//                 name: rest.name,
//                 imageUrl: rest.image_url,
//                 category: rest.categories[0].title,
//                 rating: rest.rating,
//                 lat: rest.coordinates.latitude,
//                 lng: rest.coordinates.longitude,
//                 price: rest.price,
//                 address: rest.location.address1,
//                 city: rest.location.city,
//                 zipCode: rest.location.zip_code,
//                 country: rest.location.country,
//                 state: rest.location.state,
//                 phone: rest.display_phone,
//                 sweet: false,
//                 spicy: false,
//                 salty: false,
//                 savory: true,
//                 hot: true,
//                 cold: true,
//                 healthy: true,
//                 junk: false,
//                 sad: false,
//                 happy: true,
//                 hangry: false,
//                 sick: false,
//                 celebratory: false,
//                 stressed: true,
//                 adventurous: false
//             });
//             food.save();
//         })
//     })
//     client.search(searchSoupsRequest).then(response => {
//         response.jsonBody.businesses.forEach(rest => {
//             const food = new Food({
//                 id: rest.id,
//                 name: rest.name,
//                 imageUrl: rest.image_url,
//                 category: rest.categories[0].title,
//                 rating: rest.rating,
//                 lat: rest.coordinates.latitude,
//                 lng: rest.coordinates.longitude,
//                 price: rest.price,
//                 address: rest.location.address1,
//                 city: rest.location.city,
//                 zipCode: rest.location.zip_code,
//                 country: rest.location.country,
//                 state: rest.location.state,
//                 phone: rest.display_phone,
//                 sweet: false,
//                 spicy: false,
//                 salty: true,
//                 savory: true,
//                 hot: true,
//                 cold: false,
//                 healthy: true,
//                 junk: false,
//                 sad: true,
//                 happy: false,
//                 hangry: false,
//                 sick: true,
//                 celebratory: false,
//                 stressed: true,
//                 adventurous: false
//             });
//             food.save();
//         })
//     })
//     client.search(searchSaladRequest).then(response => {
//         response.jsonBody.businesses.forEach(rest => {
//             const food = new Food({
//                 id: rest.id,
//                 name: rest.name,
//                 imageUrl: rest.image_url,
//                 category: rest.categories[0].title,
//                 rating: rest.rating,
//                 lat: rest.coordinates.latitude,
//                 lng: rest.coordinates.longitude,
//                 price: rest.price,
//                 address: rest.location.address1,
//                 city: rest.location.city,
//                 zipCode: rest.location.zip_code,
//                 country: rest.location.country,
//                 state: rest.location.state,
//                 phone: rest.display_phone,
//                 sweet: false,
//                 spicy: false,
//                 salty: false,
//                 savory: true,
//                 hot: false,
//                 cold: true,
//                 healthy: true,
//                 junk: false,
//                 sad: false,
//                 happy: true,
//                 hangry: false,
//                 sick: false,
//                 celebratory: false,
//                 stressed: false,
//                 adventurous: false
//             });
//             food.save();
//         })
//     })
//     client.search(searchFastFoodRequest).then(response => {
//         response.jsonBody.businesses.forEach(rest => {
//             const food = new Food({
//                 id: rest.id,
//                 name: rest.name,
//                 imageUrl: rest.image_url,
//                 category: rest.categories[0].title,
//                 rating: rest.rating,
//                 lat: rest.coordinates.latitude,
//                 lng: rest.coordinates.longitude,
//                 price: rest.price,
//                 address: rest.location.address1,
//                 city: rest.location.city,
//                 zipCode: rest.location.zip_code,
//                 country: rest.location.country,
//                 state: rest.location.state,
//                 phone: rest.display_phone,
//                 sweet: false,
//                 spicy: false,
//                 salty: true,
//                 savory: true,
//                 hot: true,
//                 cold: false,
//                 healthy: false,
//                 junk: true,
//                 sad: true,
//                 happy: true,
//                 hangry: true,
//                 sick: false,
//                 celebratory: false,
//                 stressed: true,
//                 adventurous: false
//             });
//             food.save();
//         })
//     })

//     // .catch(error => {
//     //     console.log(error);
//     // });

//     Drink.collection.deleteMany({});


//     const searchBubbleTeaRequest = {
//         term: 'bubble tea',
//         limit: 10,
//         location: 'san francisco, ca'
//     };

//     const searchCoffeeShopsRequest = {
//         term: 'coffeeshops',
//         limit: 10,
//         location: 'san francisco, ca'
//     };

//     const searchTeaRoomsRequest = {
//         term: 'tea rooms',
//         limit: 10,
//         location: 'san francisco, ca'
//     };

//     const searchJuiceBarsAndSmoothiesRequest = {
//         term: 'juice bars & smoothies',
//         limit: 10,
//         location: 'san francisco, ca'
//     };

//     const searchMilkshakeBarsRequest = {
//         term: 'milkshake bars',
//         limit: 10,
//         location: 'san francisco, ca'
//     };

//     const searchKombuchaRequest = {
//         term: 'kombucha',
//         limit: 10,
//         location: 'san francisco, ca'
//     };

//     const searchWineriesRequest = {
//         term: 'wineries',
//         limit: 10,
//         location: 'san francisco, ca'
//     };

//     const searchBarsRequest = {
//         term: 'bars',
//         limit: 10,
//         location: 'san francisco, ca'
//     };


//     client.search(searchBubbleTeaRequest).then(response => {
//         response.jsonBody.businesses.forEach(rest => {
//             const drink = new Drink({
//                 id: rest.id,
//                 name: rest.name,
//                 imageUrl: rest.image_url,
//                 category: rest.categories[0].title,
//                 rating: rest.rating,
//                 lat: rest.coordinates.latitude,
//                 lng: rest.coordinates.longitude,
//                 price: rest.price,
//                 address: rest.location.address1,
//                 city: rest.location.city,
//                 zipCode: rest.location.zip_code,
//                 country: rest.location.country,
//                 state: rest.location.state,
//                 phone: rest.display_phone,
//                 caffeine: true,
//                 sweet: true,
//                 aromatic: false,
//                 hot: true,
//                 iced: true,
//                 healthy: false,
//                 sad: true,
//                 tired: false,
//                 happy: true,
//                 hangry: false,
//                 sick: false,
//                 celebratory: true,
//                 stressed: true,
//                 adventurous: true
//             });
//             drink.save();
//         })
//     })

//     client.search(searchCoffeeShopsRequest).then(response => {
//         response.jsonBody.businesses.forEach(rest => {
//             const drink = new Drink({
//                 id: rest.id,
//                 name: rest.name,
//                 imageUrl: rest.image_url,
//                 category: rest.categories[0].title,
//                 rating: rest.rating,
//                 lat: rest.coordinates.latitude,
//                 lng: rest.coordinates.longitude,
//                 price: rest.price,
//                 address: rest.location.address1,
//                 city: rest.location.city,
//                 zipCode: rest.location.zip_code,
//                 country: rest.location.country,
//                 state: rest.location.state,
//                 phone: rest.display_phone,
//                 caffeine: true,
//                 sweet: true,
//                 aromatic: true,
//                 hot: true,
//                 iced: true,
//                 healthy: false,
//                 sad: false,
//                 tired: true,
//                 happy: true,
//                 hangry: false,
//                 sick: false,
//                 celebratory: false,
//                 stressed: true,
//                 adventurous: false
//             });
//             drink.save();
//         })
//     })

//     client.search(searchTeaRoomsRequest).then(response => {
//         response.jsonBody.businesses.forEach(rest => {
//             const drink = new Drink({
//                 id: rest.id,
//                 name: rest.name,
//                 imageUrl: rest.image_url,
//                 category: rest.categories[0].title,
//                 rating: rest.rating,
//                 lat: rest.coordinates.latitude,
//                 lng: rest.coordinates.longitude,
//                 price: rest.price,
//                 address: rest.location.address1,
//                 city: rest.location.city,
//                 zipCode: rest.location.zip_code,
//                 country: rest.location.country,
//                 state: rest.location.state,
//                 phone: rest.display_phone,
//                 caffeine: true,
//                 sweet: true,
//                 aromatic: true,
//                 hot: true,
//                 iced: true,
//                 healthy: true,
//                 sad: true,
//                 tired: true,
//                 happy: true,
//                 hangry: false,
//                 sick: true,
//                 celebratory: false,
//                 stressed: true,
//                 adventurous: false
//             });
//             drink.save();
//         })
//     })

//     client.search(searchJuiceBarsAndSmoothiesRequest).then(response => {
//         response.jsonBody.businesses.forEach(rest => {
//             const drink = new Drink({
//                 id: rest.id,
//                 name: rest.name,
//                 imageUrl: rest.image_url,
//                 category: rest.categories[0].title,
//                 rating: rest.rating,
//                 lat: rest.coordinates.latitude,
//                 lng: rest.coordinates.longitude,
//                 price: rest.price,
//                 address: rest.location.address1,
//                 city: rest.location.city,
//                 zipCode: rest.location.zip_code,
//                 country: rest.location.country,
//                 state: rest.location.state,
//                 phone: rest.display_phone,
//                 caffeine: false,
//                 sweet: true,
//                 aromatic: false,
//                 hot: false,
//                 iced: true,
//                 healthy: true,
//                 sad: true,
//                 tired: false,
//                 happy: true,
//                 hangry: false,
//                 sick: true,
//                 celebratory: false,
//                 stressed: true,
//                 adventurous: false
//             });
//             drink.save();
//         })
//     })

//     client.search(searchMilkshakeBarsRequest).then(response => {
//         response.jsonBody.businesses.forEach(rest => {
//             const drink = new Drink({
//                 id: rest.id,
//                 name: rest.name,
//                 imageUrl: rest.image_url,
//                 category: rest.categories[0].title,
//                 rating: rest.rating,
//                 lat: rest.coordinates.latitude,
//                 lng: rest.coordinates.longitude,
//                 price: rest.price,
//                 address: rest.location.address1,
//                 city: rest.location.city,
//                 zipCode: rest.location.zip_code,
//                 country: rest.location.country,
//                 state: rest.location.state,
//                 phone: rest.display_phone,
//                 caffeine: false,
//                 sweet: true,
//                 aromatic: false,
//                 hot: false,
//                 iced: true,
//                 healthy: false,
//                 sad: false,
//                 tired: false,
//                 happy: true,
//                 hangry: true,
//                 sick: false,
//                 celebratory: true,
//                 stressed: true,
//                 adventurous: false
//             });
//             drink.save();
//         })
//     })

//     client.search(searchKombuchaRequest).then(response => {
//         response.jsonBody.businesses.forEach(rest => {
//             const drink = new Drink({
//                 id: rest.id,
//                 name: rest.name,
//                 imageUrl: rest.image_url,
//                 category: rest.categories[0].title,
//                 rating: rest.rating,
//                 lat: rest.coordinates.latitude,
//                 lng: rest.coordinates.longitude,
//                 price: rest.price,
//                 address: rest.location.address1,
//                 city: rest.location.city,
//                 zipCode: rest.location.zip_code,
//                 country: rest.location.country,
//                 state: rest.location.state,
//                 phone: rest.display_phone,
//                 caffeine: true,
//                 sweet: false,
//                 aromatic: false,
//                 hot: false,
//                 iced: true,
//                 healthy: true,
//                 sad: false,
//                 tired: false,
//                 happy: true,
//                 hangry: false,
//                 sick: true,
//                 celebratory: false,
//                 stressed: false,
//                 adventurous: true
//             });
//             drink.save();
//         })
//     })

//     client.search(searchWineriesRequest).then(response => {
//         response.jsonBody.businesses.forEach(rest => {
//             const drink = new Drink({
//                 id: rest.id,
//                 name: rest.name,
//                 imageUrl: rest.image_url,
//                 category: rest.categories[0].title,
//                 rating: rest.rating,
//                 lat: rest.coordinates.latitude,
//                 lng: rest.coordinates.longitude,
//                 price: rest.price,
//                 address: rest.location.address1,
//                 city: rest.location.city,
//                 zipCode: rest.location.zip_code,
//                 country: rest.location.country,
//                 state: rest.location.state,
//                 phone: rest.display_phone,
//                 caffeine: false,
//                 sweet: true,
//                 aromatic: true,
//                 hot: false,
//                 iced: true,
//                 healthy: true,
//                 sad: true,
//                 tired: true,
//                 happy: true,
//                 hangry: true,
//                 sick: false,
//                 celebratory: true,
//                 stressed: true,
//                 adventurous: false
//             });
//             drink.save();
//         })
//     })

//     client.search(searchBarsRequest).then(response => {
//         response.jsonBody.businesses.forEach(rest => {
//             const drink = new Drink({
//                 id: rest.id,
//                 name: rest.name,
//                 imageUrl: rest.image_url,
//                 category: rest.categories[0].title,
//                 rating: rest.rating,
//                 lat: rest.coordinates.latitude,
//                 lng: rest.coordinates.longitude,
//                 price: rest.price,
//                 address: rest.location.address1,
//                 city: rest.location.city,
//                 zipCode: rest.location.zip_code,
//                 country: rest.location.country,
//                 state: rest.location.state,
//                 phone: rest.display_phone,
//                 caffeine: false,
//                 sweet: true,
//                 aromatic: false,
//                 hot: false,
//                 iced: true,
//                 healthy: false,
//                 sad: true,
//                 tired: false,
//                 happy: true,
//                 hangry: true,
//                 sick: false,
//                 celebratory: true,
//                 stressed: true,
//                 adventurous: false
//             });
//             drink.save();
//         })
//     })
//         // .catch(error => {
//         //     console.log(error);
//         // });
// });

// module.exports = seed;