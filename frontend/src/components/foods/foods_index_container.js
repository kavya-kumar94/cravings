import { connect } from 'react-redux';
import { fetchFoods } from '../../actions/food_actions';
import FoodsIndex from './foods_index';

const mapStateToProps = (state) => {
    return {
        foods: Object.values(state.entities.foods),
        loading: state.ui.loading.indexLoading
    };
    
};

const mapDispatchToProps = dispatch => {
    return {
        fetchFoods: (query) => dispatch(fetchFoods(query))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodsIndex);