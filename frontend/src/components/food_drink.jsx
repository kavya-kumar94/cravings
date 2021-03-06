import React from 'react';
import { withRouter } from 'react-router-dom';
import './food_drink.css'

class FoodDrink extends React.Component {
    constructor(props) {
        super(props);
        this.foodWheel = this.foodWheel.bind(this);
        this.drinkWheel = this.drinkWheel.bind(this);
    }

    foodWheel(e) {
        e.preventDefault();
        this.props.history.push('/foodform')
    }
    
    drinkWheel(e) {
        e.preventDefault();
        this.props.history.push('/drinkform')

    }

    render() {
        return (
            <div className="food-drink">
                <button onClick={this.foodWheel} className="food-btn">Food</button>
                <button onClick={this.drinkWheel} className="drink-btn">Drinks</button>
            </div>
        )
    }
}

export default withRouter(FoodDrink);