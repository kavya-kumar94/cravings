import React from 'react';
import './drinks.css'

class DrinksIndexItem extends React.Component {
    render() {
        return (
            <div className="drinks-index-item">
                <h3>{props.drink.name}</h3>
                <h3>{props.drink.address}</h3>
                <h3>{props.drink.city}</h3>
                <h3>{props.drink.state}</h3>
                <h3>{props.drink.postal_code}</h3>
                <h3>{props.drink.phone_number}</h3>
                <h3>{props.drink.price}</h3>
                <img src={this.props.drink.imageUrl} className="drink-photo" />
            </div>
        );
    }
}

export default DrinksIndexItem;