import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './save.css'

import { fetchFoodSaves, unsaveFood } from '../../actions/food_save_actions'
import { fetchDrinkSaves, unsaveDrink } from '../../actions/drink_save_actions'
import { fetchFoods } from '../../actions/food_actions'
import { fetchDrinks } from '../../actions/drink_actions'
class SaveIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state ={};
        this.unsaveTheDrink = this.unsaveTheDrink.bind(this);
        this.unsaveTheFood = this.unsaveTheFood.bind(this);
    }

    componentDidMount() {
        this.props.fetchFoodSaves(this.props.currentUser.id);
        this.props.fetchDrinkSaves(this.props.currentUser.id);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.foodSaves) {
            this.setState(nextProps.foodSaves)
        } else if (nextProps.drinkSaves) {
            this.setState(nextProps.drinkSaves);
        }
    }

    unsaveTheFood(foodSave) {
        this.props.unsaveFood(foodSave)
    }

    unsaveTheDrink(drinkSave) {
        this.props.unsaveDrink(drinkSave)
    }


    render() {

        const { currentUser, foodSaves, drinkSaves } = this.props;
        return (
            <div className="save-index">
                <div className="user-info">
                    <li>{currentUser.username}'s saved restaurants!</li>
                    <li className="member-date">Member since August 2019</li>
                <ul className="saved-food-items">
                    {Object.values(foodSaves).map((foodSave, idx) => {
                                return (
                                    (foodSave.foodId && foodSave.foodId instanceof Object) ? 
                                    <div key={foodSave.foodId} className="btn-link">
                                        <Link to={`/foods/${String(foodSave.foodId._id)}`}>{foodSave.foodId.name}</Link>
                                        <button onClick={() => this.unsaveTheFood(foodSave)}>delete</button>
                                    </div>        : <div key={idx}></div>                        
                                )}
                    )}    
                <ul className="saved-drink-items">
                    {Object.values(drinkSaves).map((drinkSave, idx) => {
                        
                            return (
                                (drinkSave.drinkId && drinkSave.drinkId instanceof Object) ?
                                <div key={drinkSave.drinkId} className="btn-link">
                                    <Link to={`/drinks/${String(drinkSave.drinkId._id)}`}>{drinkSave.drinkId.name}</Link>
                                    <button onClick={() => this.unsaveTheDrink(drinkSave)}>delete</button>

                                </div> : <div key={idx}></div>
                            )}
                    )}
                </ul>
                </ul>
                    </div>
            </div>
        )
    }
}
const msp = state => {
    return {
        currentUser: state.session.user,
        // userId: state.session.user.id,
        foodSaves: state.entities.foodSaves,
        drinkSaves: state.entities.drinkSaves
        // foods: state.entities.foods,
        // drinks: state.entities.drinks
    }
}
const mdp = dispatch => {
    return {
        fetchFoodSaves: (userId) => dispatch(fetchFoodSaves(userId)),
        fetchDrinkSaves: (userId) => dispatch(fetchDrinkSaves(userId)),
        fetchDrinks: () => dispatch(fetchDrinks()),
        fetchFoods: () => dispatch(fetchFoods()),
        unsaveFood: (foodSave) => dispatch(unsaveFood(foodSave)),
        unsaveDrink: (drinkSave) => dispatch(unsaveDrink(drinkSave))
    }
}
export default connect(msp, mdp)(SaveIndex);