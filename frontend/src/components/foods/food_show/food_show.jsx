import React from 'react';


class FoodShow extends React.Component{

    componentDidMount(){
        this.props.fetchFood(this.props.match.params.foodId)
    }

    render(){

        const { food } = this.props;

        if (this.props.food === undefined) return null;

        return(
            <div>
                <h3>{food.name}</h3>
                <h3>{food.address}</h3>
                <h3>{food.price}</h3>
                <img src={this.props.food.imageUrl} className="food-photo" />
            </div>
        )
    }
}

export default FoodShow;