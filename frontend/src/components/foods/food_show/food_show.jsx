import React from 'react';


class FoodShow extends React.Component{

    componentDidMount(){
        this.props.fetchFood(this.props.match.params.foodId)
    }

    render(){
        
        const { food } = this.props;

        if (this.props.food === undefined) return null;

        return(
            <div className="food-show">
                <h3>{food.name}</h3>
                <h3>{food.address}, {food.city}, {food.state} {food.zipCode}</h3>
                <h3>{food.price}</h3>
                <div className={`rating-static rating-${food.rating*10}`}>
                </div>
                <img src={this.props.food.imageUrl} className="food-photo" />
            </div>
        )
    }
}

export default FoodShow;