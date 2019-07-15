import React from 'react';
import './foods.css'

class FoodsIndexItem extends React.Component {

    render() {
        return (
            <div className="foods-index-item">
                <h3>{this.props.food.name}</h3>
                <h3>{this.props.food.address}</h3>
                <h3>{this.props.food.city}</h3>
                <h3>{this.props.food.state}</h3>
                <h3>{this.props.food.rating}</h3>
                <h3>{this.props.food.postal_code}</h3>
                <h3>{this.props.food.phone_number}</h3>
                <h3>{this.props.food.price}</h3>
                <img src={this.props.food.imageUrl} className="food-photo" />
            </div>
        );
    }
}

export default FoodsIndexItem;