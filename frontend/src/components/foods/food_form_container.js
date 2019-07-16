import { connect } from 'react-redux';
import { fetchFoods } from '../../actions/food_actions';
import FoodForm from './food_form';

const mapStateToProps = (state) => {
    return {
        foods: Object.values(state.entities.foods)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchFoods: (parsed) => dispatch(fetchFoods(parsed))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodForm);