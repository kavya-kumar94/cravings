import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './save.css'

import { fetchFoodSaves } from '../../actions/food_save_actions'
import { fetchDrinkSaves } from '../../actions/drink_save_actions'
class SaveIndex extends React.Component {
    constructor(props) {
        super(props);
        // this.randomDate = this.randomDate.bind(this);
    }

    // randomDate(start, end) {
    //     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    // }
    componentDidMount() {
        let { userId } = this.props;
        this.props.fetchDrinkSaves(userId);
        this.props.fetchFoodSaves(userId);
    }
    
    render() {
        
        const { currentUser, userId } = this.props;
        return(
            <div className="save-index"> 
                <div className="user-info">
                    <li>{currentUser.username}'s saved restaurants!</li>
                    <li className="member-date">Member since August 2019</li>
                </div>
                I am your saves
            </div>
        )
    }
}


const msp = state => {
    return {
        currentUser: state.session.user,
        userId: state.session.user.id
    }
}

const mdp = dispatch => {
    return {
        fetchFoodSaves: (userId) => dispatch(fetchFoodSaves(userId)),
        fetchDrinkSaves: (userId) => dispatch(fetchDrinkSaves(userId))
    }
}
export default connect(msp, mdp)(SaveIndex);