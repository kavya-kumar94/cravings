import React from 'react';
import { withRouter } from 'react-router-dom';
import './login_form.css'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);

        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
        this.usernameTyper = this.usernameTyper.bind(this);
        this.passwordTyper = this.passwordTyper.bind(this);
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.currentUser === true) {
    //         this.props.history.push('/');
    //     }

    //     this.setState({ errors: nextProps.errors })
    // }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        let user = {
            username: this.state.username,
            password: this.state.password
        };

        this.props.login(user)
            .then(this.props.closeModal);
    }

    handleDemoSubmit() {

        let demoUser = {
            username: 'guestuser',
            password: 'demologin'
        }

        this.props.login(demoUser)
            .then(this.props.closeModal);
    }

    usernameTyper(e) {
        e.preventDefault();
        let i = 0;
        let username = 'guestuser'
        const speed = 75; /* The speed/duration of the effect in milliseconds */
        let username_field = document.getElementById("username");
        username_field.value = "";

        const typeWriter = () => {
            if (i < username.length) {
                username_field.value += username.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        };

        typeWriter();
        setTimeout(this.passwordTyper, 1000);
        setTimeout(this.handleDemoSubmit, 1800);
    };

    passwordTyper() {
        let i = 0;
        const password = 'demologin'
        const speed = 75; /* The speed/duration of the effect in milliseconds */
        let password_field = document.getElementById("password");
        password_field.value = "";

        const typeWriter = () => {
            if (i < password.length) {
                password_field.value += password.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        };
        typeWriter();
    };

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="login-form">
                        <div onClick={this.props.closeModal} className="close-x">&times;</div>
                        <br />
                        <div className="please">Log in</div>
                        <div className="inputs">
                            <input type="text"
                                id="username"
                                value={this.state.username}
                                onChange={this.update('username')}
                                placeholder="Username"
                            />
                            <br />
                            <input type="password"
                                id="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="Password"
                            />
                            <br />
                            <input type="submit" value="Log In" />
                            <br />
                            <input type="submit" value="Demo Login" onClick={this.usernameTyper} />
                            {this.renderErrors()}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);