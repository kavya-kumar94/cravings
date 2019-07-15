import React from 'react';
import './foods.css'

class FoodsIndexItem extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="foods-index-item">
                <h3>{this.props.drink.name}</h3>
                <h3>{this.props.drink.address}</h3>
                <h3>{this.props.drink.city}</h3>
                <h3>{this.props.drink.state}</h3>
                <h3>{this.props.drink.rating}</h3>
                <h3>{this.props.drink.postal_code}</h3>
                <h3>{this.props.drink.phone_number}</h3>
                <h3>{this.props.drink.price}</h3>
                <img src={this.props.drink.imageUrl} className="food-photo" />
            </div>
        );
    }
}

export default FoodsIndexItem;