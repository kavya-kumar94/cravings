const Food = require("./models/Food");
const Drink = require("./models/Drink")

const seed = (() => {
    Food.collection.deleteMany({});

    const yelp = require('yelp-fusion');
    const apiKey = "nYHIXBZJ5v8UFRI5nnG8So8pqJmDrC9ZsOy9rPjDM1ntm6EQ1mTi-bdJhxZs585BqrThjKKpHi0y2Z-6fmAx48-1SWYNUa3vWgr1JkirCLkz-3x-vYUk81fVT7orXXYx";

    const searchRequest = {
        term: 'bubble tea',
        limit: 10,
        location: 'san francisco, ca'
    };

    const client = yelp.client(apiKey);

    client.search(searchRequest).then(response => {
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
                phone: rest.display_phone
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

    const searchRequest = {
        term: 'bubble tea',
        limit: 10,
        location: 'san francisco, ca'
    };

    const client = yelp.client(apiKey);

    client.search(searchRequest).then(response => {
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
                phone: rest.display_phone
            });
            drink.save();
        })
    })
        .catch(error => {
            console.log(error);
        });
});

module.exports = seed;