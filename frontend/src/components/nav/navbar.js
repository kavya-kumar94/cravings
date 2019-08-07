import React from 'react';
import './navbar.css';
import { withRouter, Link } from 'react-router-dom';


class NavBar extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            userMenu: false,
            gitMenu: false,
        }

        this.getLinks = this.getLinks.bind(this);

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
        this.showDropdownMenu2 = this.showDropdownMenu2.bind(this);
        this.hideDropdownMenu2 = this.hideDropdownMenu2.bind(this);
    }

    showDropdownMenu(e) {
        e.preventDefault();
        this.setState({ userMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    showDropdownMenu2(e) {
        e.preventDefault();
        this.setState({ gitMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu2);
        });
    }

    hideDropdownMenu() {
        this.setState({ userMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu2() {
        this.setState({ gitMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu2);
        });
    }

    getLinks() {

        const { currentUser, logout, openModal, loggedIn } = this.props;

        if (loggedIn) {
            return (
                <div className="logged-in">
                    <h2 className="username-toggle" onClick={this.showDropdownMenu}>Welcome, {currentUser.username}!  ▿</h2>
                    {this.state.userMenu && (
                        <div className="container">
                            <ul className="dropdown">
                                <li onClick={() => this.props.history.push('/foodform')}>My Saves</li>
                                <Link to='/'>
                                    <li onClick={logout}>Logout</li>
                                </Link>
                            </ul>
                        </div>
                    )}
                </div>
            );
        } else {
            return (
                <div className="navbar-links">
                    <button onClick={() => openModal('signup')}>Sign up</button>
                    &nbsp; &nbsp;
                    <button onClick={() => openModal('login')}>Log in</button>
                    <h2 className="github-toggle" onClick={this.showDropdownMenu2}>&nbsp;</h2>
                    {this.state.gitMenu && (
                        <div className="container2">
                            <ul className="dropdown2">
                                <a href="https://github.com/kavya-kumar94">Kavya</a>
                                <a href="https://github.com/sophiacheungshc">Sophia</a>
                                <a href="https://github.com/mkayys">Michelle</a>
                                <a href="https://github.com/welduselam">Selam</a>
                            </ul>
                        </div>
                    )}
                </div>
            );
        }
    }

    render() {
        return (
            <div className="navbar">
                {this.props.location.pathname !== '/' ? <div className="nav-logo" onClick={() => this.props.history.push('/')}></div> : <></>}
                {this.getLinks()}
            </div>
        );
    }
}

export default withRouter(NavBar);