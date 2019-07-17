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
                <p>{food.name}</p>
                <p>{food.address}, {food.city}, {food.state} {food.zipCode}</p>
                <p>{food.price}</p>
                <div className={`rating-static rating-${food.rating*10}`}>
                </div>
                <img src={this.props.food.imageUrl} className="food-photo" />
            </div>
        )
    }
}

export default FoodShow;