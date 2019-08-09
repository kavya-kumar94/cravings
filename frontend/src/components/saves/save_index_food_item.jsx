import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { unsaveFood } from '../../actions/food_save_actions'


class SaveIndexFoodItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { foodSave } = this.props;
        return (
        <div className="btn-link">
            <Link to={`/foods/${String(foodSave.foodId._id)}`}>{foodSave.foodId.name}</Link>
            <button onClick={() => this.props.unsaveFood(foodSave)}>delete</button>
        </div>
        )
    }

}

const mdp = dispatch => {
    return {
        unsaveFood: (foodSave) => dispatch(unsaveFood(foodSave)),
    }
}

export default connect(null, mdp)(SaveIndexFoodItem);