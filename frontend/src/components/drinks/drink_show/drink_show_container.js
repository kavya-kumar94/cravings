import { connect } from 'react-redux';
import { fetchDrink } from '../../actions/drink_actions';
import DrinkShow from './drink_show';

const mapStateToProps = (state, ownProps) => {
    return {
        drink: state.entities.drink[ownProps.match.params.drinkId]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDrink: (id) => dispatch(fetchDrink(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkShow);