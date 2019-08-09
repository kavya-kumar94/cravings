import { connect } from 'react-redux';
import { fetchDrink } from '../../../actions/drink_actions';
import { saveDrink, unsaveDrink, fetchDrinkSave } from '../../../actions/drink_save_actions';
import DrinkShow from './drink_show';

const mapStateToProps = (state, ownProps) => {
    return {
        drink: state.entities.drinks[ownProps.match.params.drinkId],
        loading: state.ui.loading.detailLoading,
        loggedIn: state.session.isAuthenticated,
        currentUser: state.session.user,
        userId: state.session.user.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDrink: (id) => dispatch(fetchDrink(id)),
        fetchDrinkSave: (drinkSave) => dispatch(fetchDrinkSave(drinkSave)),
        saveDrink: (drinkSave) => dispatch(saveDrink(drinkSave)),
        unsaveDrink: (drinkSave) => dispatch(unsaveDrink(drinkSave))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkShow);