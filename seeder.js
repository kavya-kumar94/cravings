const Food = require("./models/Food");
const Drink = require("./models/Drink")

const seed = (() => {
    Food.collection.deleteMany({});

    const yelp = require('yelp-fusion');
    const apiKey = "nYHIXBZJ5v8UFRI5nnG8So8pqJmDrC9ZsOy9rPjDM1ntm6EQ1mTi-bdJhxZs585BqrThjKKpHi0y2Z-6fmAx48-1SWYNUa3vWgr1JkirCLkz-3x-vYUk81fVT7orXXYx";

    const searchBreakfastRequest = {
        term: 'Breakfast & Brunch',
        limit: 10,
        location: 'san francisco, ca'
    };
    const searchBuffetRequest = {
        term: 'Buffets',
        limit: 10,
        location: 'san francisco, ca'
    };
    const searchItalianRequest = {
        term: 'Italian',
        limit: 10,
        location: 'san francisco, ca'
    };
    const searchJapaneseRequest = {
        term: 'Japanese',
        limit: 10,
        location: 'san francisco, ca'
    };
    const searchMexicanRequest = {
        term: 'Japanese',
        limit: 10,
        location: 'san francisco, ca'
    };
    const searchChineseRequest = {
        term: 'Japanese',
        limit: 10,
        location: 'san francisco, ca'
    };
    const searchIndianRequest = {
        term: 'Japanese',
        limit: 10,
        location: 'san francisco, ca'
    };
    const searchKoreanRequest = {
        term: 'Japanese',
        limit: 10,
        location: 'san francisco, ca'
    };
    const searchPizzaRequest = {
        term: 'Japanese',
        limit: 10,
        location: 'san francisco, ca'
    };
    const searchSandwichesRequest = {
        term: 'Japanese',
        limit: 10,
        location: 'san francisco, ca'
    };
    const searchSoupRequest = {
        term: 'Japanese',
        limit: 10,
        location: 'san francisco, ca'
    };
    const searchSaladRequest = {
        term: 'Japanese',
        limit: 10,
        location: 'san francisco, ca'
    };
    const searchFastFoodRequest = {
        term: 'Japanese',
        limit: 10,
        location: 'san francisco, ca'
    };

    const client = yelp.client(apiKey);

    client.search(searchBreakfastRequest).then(response => {
        response.jsonBody.businesses.forEach(rest => {
            const food = new Food({
                id: rest.id,
                name: rest.name,
                imageUrl: rest.image_url,
                category: rest.categories[0].title,
                rating: rest.rating,
                lat: rest.coordinates.latitude,
                lng: rest.coordinates.longitude,
                price: rest.price,
                address: rest.location.address1,
                city: rest.location.city,
                zipCode: rest.location.zip_code,
                country: rest.location.country,
                state: rest.location.state,
                phone: rest.display_phone,
                sweet: true,
                spicy: false,
                salty: true,
                savory: true,
                hot: true,
                cold: false,
                healthy: true,
                junk: true,
                sad: false,
                happy: true,
                hangry: false,
                sick: false,
                celebratory: true,
                stressed: false,
                adventurous: false
            });
            food.save();
        })
    })
    .catch(error => {
        console.log(error);
    });

    Drink.collection.deleteMany({});

    const yelp = require('yelp-fusion');
    const apiKey = "nYHIXBZJ5v8UFRI5nnG8So8pqJmDrC9ZsOy9rPjDM1ntm6EQ1mTi-bdJhxZs585BqrThjKKpHi0y2Z-6fmAx48-1SWYNUa3vWgr1JkirCLkz-3x-vYUk81fVT7orXXYx";

    const searchBubbleTeaRequest = {
        term: 'bubble tea',
        limit: 10,
        location: 'san francisco, ca'
    };

    const searchCoffeeShopsRequest = {
        term: 'coffeeshops',
        limit: 10,
        location: 'san francisco, ca'
    };

    const searchTeaRoomsRequest = {
        term: 'tea rooms',
        limit: 10,
        location: 'san francisco, ca'
    };

    const searchJuiceBarsAndSmoothiesRequest = {
        term: 'juice bars & smoothies',
        limit: 10,
        location: 'san francisco, ca'
    };

    const client = yelp.client(apiKey);

    client.search(searchBubbleTeaRequest).then(response => {
        response.jsonBody.businesses.forEach(rest => {
            const drink = new Drink({
                id: rest.id,
                name: rest.name,
                imageUrl: rest.image_url,
                category: rest.categories[0].title,
                rating: rest.rating,
                lat: rest.coordinates.latitude,
                lng: rest.coordinates.longitude,
                price: rest.price,
                address: rest.location.address1,
                city: rest.location.city,
                zipCode: rest.location.zip_code,
                country: rest.location.country,
                state: rest.location.state,
                phone: rest.display_phone,
                caffeine: true,
                sweet: true,
                aromatic: false,
                hot: true,
                iced: true,
                healthy: false,
                sad: true,
                tired: false,
                happy: true,
                hangry: false,
                sick: false,
                celebratory: true,
                stressed: true,
                adventurous: true
            });
            drink.save();
        })
    })

    client.search(searchCoffeeShopsRequest).then(response => {
        response.jsonBody.businesses.forEach(rest => {
            const drink = new Drink({
                id: rest.id,
                name: rest.name,
                imageUrl: rest.image_url,
                category: rest.categories[0].title,
                rating: rest.rating,
                lat: rest.coordinates.latitude,
                lng: rest.coordinates.longitude,
                price: rest.price,
                address: rest.location.address1,
                city: rest.location.city,
                zipCode: rest.location.zip_code,
                country: rest.location.country,
                state: rest.location.state,
                phone: rest.display_phone,
                caffeine: true,
                sweet: true,
                aromatic: true,
                hot: true,
                iced: true,
                healthy: false,
                sad: false,
                tired: true,
                happy: true,
                hangry: false,
                sick: false,
                celebratory: false,
                stressed: true,
                adventurous: false
            });
            drink.save();
        })
    })

    client.search(searchTeaRoomsRequest).then(response => {
        response.jsonBody.businesses.forEach(rest => {
            const drink = new Drink({
                id: rest.id,
                name: rest.name,
                imageUrl: rest.image_url,
                category: rest.categories[0].title,
                rating: rest.rating,
                lat: rest.coordinates.latitude,
                lng: rest.coordinates.longitude,
                price: rest.price,
                address: rest.location.address1,
                city: rest.location.city,
                zipCode: rest.location.zip_code,
                country: rest.location.country,
                state: rest.location.state,
                phone: rest.display_phone,
                caffeine: true,
                sweet: true,
                aromatic: true,
                hot: true,
                iced: true,
                healthy: true,
                sad: true,
                tired: true,
                happy: true,
                hangry: false,
                sick: true,
                celebratory: false,
                stressed: true,
                adventurous: false
            });
            drink.save();
        })
    })

    client.search(searchJuiceBarsAndSmoothiesRequest).then(response => {
        response.jsonBody.businesses.forEach(rest => {
            const drink = new Drink({
                id: rest.id,
                name: rest.name,
                imageUrl: rest.image_url,
                category: rest.categories[0].title,
                rating: rest.rating,
                lat: rest.coordinates.latitude,
                lng: rest.coordinates.longitude,
                price: rest.price,
                address: rest.location.address1,
                city: rest.location.city,
                zipCode: rest.location.zip_code,
                country: rest.location.country,
                state: rest.location.state,
                phone: rest.display_phone,
                caffeine: false,
                sweet: true,
                aromatic: false,
                hot: false,
                iced: true,
                healthy: true,
                sad: true,
                tired: false,
                happy: true,
                hangry: false,
                sick: true,
                celebratory: false,
                stressed: true,
                adventurous: false
            });
            drink.save();
        })
    })
        // .catch(error => {
        //     console.log(error);
        // });
});

module.exports = seed;