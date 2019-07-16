import { connect } from 'react-redux';
import { fetchDrinks } from '../../actions/drink_actions';
import DrinksIndex from './drinks_index';

const mapStateToProps = (state) => {
    return {
        drinks: Object.values(state.entities.drinks)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDrinks: (query) => dispatch(fetchDrinks(query))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinksIndex);