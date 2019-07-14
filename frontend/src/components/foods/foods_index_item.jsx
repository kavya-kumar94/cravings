import React from 'react';

class FoodsIndexItem extends React.Component {
    render() {
        return (
            <div className="food-index-item">
                <h3>{this.props.food.name}</h3>
                <h3>{this.props.food.location}</h3>
            </div>
        );
    }
}

export default FoodsIndexItem;