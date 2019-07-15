import React from 'react';
import './foods.css'

class FoodsIndexItem extends React.Component {
    render(props) {
        return (
            <div className="foods-index-item">
                <h3>{props.drink.name}</h3>
                <h3>{props.drink.address}</h3>
                <h3>{props.drink.city}</h3>
                <h3>{props.drink.state}</h3>
                <h3>{props.drink.postal_code}</h3>
                <h3>{props.drink.phone_number}</h3>
                <h3>{props.drink.price}</h3>
                <img src={props.drink.imageUrl} className="food-photo" />
            </div>
        );
    }
}

export default FoodsIndexItem;