import { connect } from 'react-redux';
import Map from './map';
// import { updateFilter } from '../../actions/filter_actions';

const msp = (state, ownProps) => ({
    foods: Object.values(state.entities.foods),
    drinks: Object.values(state.entities.drinks),

});

const mdp = dispatch => ({
    // updateFilter: (filter, value) => dispatch(updateFilter(filter, value))

});

export default connect(msp,mdp)(Map);