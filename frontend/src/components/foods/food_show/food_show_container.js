import { connect } from 'react-redux';
import { fetchFood } from '../../../actions/food_actions';
import { saveFood, unsaveFood, fetchFoodSave } from '../../../actions/food_save_actions';
import FoodShow from './food_show';

const mapStateToProps = (state,ownProps) => {
    return {
        food: state.entities.foods[ownProps.match.params.foodId],
        loading: state.ui.loading.detailLoading,
        loggedIn: state.session.isAuthenticated,
        currentUser: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchFood: (id) => dispatch(fetchFood(id)),
        fetchFoodSave: (foodSave) => dispatch(fetchFoodSave(foodSave)),
        saveFood: (foodSave) => dispatch(saveFood(foodSave)),
        unsaveFood: (foodSave) => dispatch(unsaveFood(foodSave))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodShow);