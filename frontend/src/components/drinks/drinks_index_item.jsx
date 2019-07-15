import React from 'react';
import './drinks.css'

class DrinksIndexItem extends React.Component {

    render() {
        return (
            <div className="drinks-index-item">
                <h3>{this.props.drink.name}</h3>
                <h3>{this.props.drink.address}</h3>
                <h3>{this.props.drink.city}</h3>
                <h3>{this.props.drink.state}</h3>
                <h3>{this.props.drink.postal_code}</h3>
                <h3>{this.props.drink.phone_number}</h3>
                <h3>{this.props.drink.price}</h3>
                <img src={this.props.drink.imageUrl} className="drink-photo" />
            </div>
        );
    }
}

export default DrinksIndexItem;