import React from 'react';
import './navbar.css'

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.getLinks = this.getLinks.bind(this);
    }

    getLinks() {

        const { currentUser, logout, openModal } = this.props;

        if (this.props.loggedIn) {
            return (
                <div>
                    <button onClick={logout}>Logout</button>
                    <h2 className="welcome-name">Welcome, {currentUser.username}</h2>
                </div>
            );
        } else {
            return (
                <div className="navbar-links">
                    <button onClick={() => openModal('signup')}>Sign up</button>
                    &nbsp; &nbsp;
                    <button onClick={() => openModal('login')}>Log in</button>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="navbar">
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;