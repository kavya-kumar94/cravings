import React from 'react';
import { withRouter } from 'react-router-dom';
import './food_drink.css'

class FoodDrink extends React.Component {
    constructor(props) {
        super(props);
        this.foodWheel = this.foodWheel.bind(this);
    }

    foodWheel(e) {
        e.preventDefault();
        this.props.history.push('/foodwheel')
    }

    render() {
        return (
            <div className="food-drink">
                <h3>Would you like food, or drinks?</h3>
                <button onClick={this.foodWheel}className="food-btn">Food</button>
                <button className="drink-btn">Drinks</button>
            </div>
        )
    }
}

export default withRouter(FoodDrink);