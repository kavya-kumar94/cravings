import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './save.css'
class SaveIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser } = this.props;
        return(
            <div className="save-index"> 
                <div className="user-info">
                    { currentUser.username }'s saved restaurants!
                </div>
                I am your saves
            </div>
        )
    }
}


const msp = state => {
    return {
        currentUser: state.session.user
    }
}
export default connect(msp, null)(SaveIndex);