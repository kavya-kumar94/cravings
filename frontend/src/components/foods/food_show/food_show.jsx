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
            </div>
        )
    }
}

export default FoodShow;