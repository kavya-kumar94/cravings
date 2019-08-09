import { connect } from 'react-redux';
import { fetchDrink } from '../../../actions/drink_actions';
import DrinkShow from './drink_show';

const mapStateToProps = (state, ownProps) => {
    return {
        drink: state.entities.drinks[ownProps.match.params.drinkId] || {},
        loading: state.ui.loading.detailLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDrink: (id) => dispatch(fetchDrink(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkShow);