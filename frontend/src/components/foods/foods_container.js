import { connect } from 'react-redux';
import { fetchFoods } from '../../actions/food_actions';
import Foods from './foods';

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

export default connect(mapStateToProps, mapDispatchToProps)(Foods);