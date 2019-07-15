import React from 'react';
import { withRouter } from 'react-router-dom';
import './signup_form.css'

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: undefined,
            password: '',
            password2: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.signedIn === true) {
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
            age: this.state.age,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.signup(user, this.props.history)
            .then(this.props.closeModal);
    }

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
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="signup-form">
                        <div onClick={this.props.closeModal} className="close-x">&times;</div>
                        <br />
                        <div className="please">Sign up!</div>
                        <div className="inputs">
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                placeholder="Username"
                            />
                            <br />
                            <input type="text"
                                value={this.state.age}
                                onChange={this.update('age')}
                                placeholder="Age"
                            />
                            <br />
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="Password"
                            />
                            <br />
                            <input type="password"
                                value={this.state.password2}
                                onChange={this.update('password2')}
                                placeholder="Confirm Password"
                            />
                            <br />
                            <input type="submit" value="Sign Up" />
                            {this.renderErrors()}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);