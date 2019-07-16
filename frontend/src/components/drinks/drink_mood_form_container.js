import { connect } from 'react-redux';
import DrinkForm from './drink_mood_form';
import { fetchDrinks } from '../../actions/drink_actions';

const mapStateToProps = state => {
    return {
        drinks: Object.values(state.entities.drinks)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDrinks: (parsed) => dispatch(fetchDrinks(parsed))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrinkForm)