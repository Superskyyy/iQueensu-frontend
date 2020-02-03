import React, {Component} from 'react';
import styles             from './LoginPage.module.css';
//import './App.css';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: '',
            regist: false,
        };

        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }

    dismissError() {
        this.setState({error: ''});
    }

    handleSubmit(evt) {
        evt.preventDefault();

        if (!this.state.username) {
            return this.setState({error: 'Username is required'});
        }

        if (!this.state.password) {
            return this.setState({error: 'Password is required'});
        }

        return this.setState({error: ''});
    }

    handleUserChange(evt) {
        this.setState({
            username: evt.target.value,
        });
    }

    handlePassChange(evt) {
        this.setState({
            password: evt.target.value,
        });
    }

    render() {
        const LoginLayout = (prop) => {
            return (
                <div className={styles.login}>
                    <div className={styles.form}>
                        <form className={prop.type} onSubmit={this.handleSubmit}>
                            {
                                this.state.error &&
                                <h3 data-test="error" onClick={this.dismissError}>
                                    <button onClick={this.dismissError}>✖</button>
                                    {this.state.error}
                                </h3>
                            }
                            {prop.children}
                        </form>
                    </div>
                </div>
            );
        };

        const Reg = (prop) => {
            return (
                <>
                    <label>Register</label>
                    <input type="text" data-test="username" placeholder="Email" value={this.state.username}
                           onChange={this.handleUserChange}/>
                    <input type="password" data-test="password" placeholder="Password" value={this.state.password}
                           onChange={this.handlePassChange}/>
                    <div className={styles.func}>
                        <button type="submit" data-test="submit">Next</button>
                        <a className={styles.change} href="#" onClick={() => {this.setState((state, prop) => ({regist: !state.regist}));}}>Sign in</a>
                    </div>
                </>
            );
        };

        const Login = (prop) => {
            return (
                <>
                    <label>Login</label>
                    <input type="text" data-test="username" placeholder="Email" value={this.state.username}
                           onChange={this.handleUserChange}/>
                    <input type="password" data-test="password" placeholder="Password" value={this.state.password}
                           onChange={this.handlePassChange}/>
                    <div className={styles.func}>
                        <button type="submit" data-test="submit">Login</button>
                        <a className={styles.change} href="#" onClick={() => {this.setState((state, prop) => ({regist: !state.regist}));}}>Register</a>
                    </div>
                </>
            );
        };

        const layoutType = this.state.regist ? styles.submit : styles.loginform;


        return (
            <LoginLayout type={layoutType}>
                {this.state.regist ? <Reg/> : <Login/>}
            </LoginLayout>
        );
    }
}

export default LoginPage;
