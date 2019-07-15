import { connect } from 'react-redux';
import { fetchFood } from '../../actions/food_actions';
import FoodShow from './food_show';

const mapStateToProps = (state,ownProps) => {
    return {
        food: state.entities.foods[ownProps.match.params.foodId]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchFood: (id) => dispatch(fetchFood(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodShow);