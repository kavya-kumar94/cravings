import { connect } from 'react-redux';
import { fetchDrinks } from '../../actions/drink_actions';
import DrinkIndex from './drinks_index';

const mapStateToProps = (state) => {
    return {
        drinks: Object.values(state.entities.drinks)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDrinks: () => dispatch(fetchDrinks())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkIndex);