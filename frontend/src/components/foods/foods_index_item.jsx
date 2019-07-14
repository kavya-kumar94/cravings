import React from 'react';

class FoodsIndexItem extends React.Component {
    render() {
        return (
            <div className="food-index-item">
                <h3>{this.props.food.name}</h3>
                <h3>{this.props.food.address}</h3>
                <h3>{this.props.food.city}</h3>
                <h3>{this.props.food.state}</h3>
                <h3>{this.props.food.postal_code}</h3>
                <h3>{this.props.food.phone_number}</h3>
                <h3>{this.props.food.price}</h3>
                <h3>{this.props.food.image_url}</h3>
            </div>
        );
    }
}

export default FoodsIndexItem;