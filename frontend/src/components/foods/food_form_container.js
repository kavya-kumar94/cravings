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
        fetchFoods: () => dispatch(fetchFoods())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodForm);