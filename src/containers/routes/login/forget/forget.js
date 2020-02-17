import React, {Component} from 'react';
import {NavLink, withRouter} from "react-router-dom";
import styles             from './LoginPage.module.css';
import Logo               from './qucumber.svg';
//import './App.css';

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            error: '',
            confirmp: '',

        };
    }

    dismissError = () => {
        this.setState({error: ''});
    }

    handleSubmit = (evt) => {
        evt.preventDefault();

        if (!this.state.username) {
            return this.setState({error: 'Username is required'});
        }

        if (!this.state.password) {
            return this.setState({error: 'Password is required'});
        }

        if (!this.state.confirmp) {
            return this.setState({error: 'Confirm password is required'});
        }

        if (this.state.confirmp != this.state.password) {
          return this.setState({error: 'Confirm password should be equal to passwaord'});
        }

        if (this.state.password.length > 27) {
            return this.setState({error: 'The max length of password is 27'});
        }

        if (this.state.password.length < 8) {
            return this.setState({error: 'The min length of password is 8'});
        }

        if (!(this.state.password.match(/[a-z]/g) && this.state.password.match( /[A-Z]/g) && this.state.password.match( /[0-9]/g))) {
            return this.setState({error: 'Password should contain at least 1 of each (a-z),(A-Z),(0-9)'});
        }

        if (this.state.password.match( /[^a-zA-Z\d]/g)) {
          return this.setState({error: 'Password can not contain special character'});
        }

        return this.setState({error: ''});
    }

    handleUserChange = (evt) => {
        this.setState({
            username: evt.target.value,
        });
    }

    handleComfirmpChange = (evt) => {
        this.setState({
            confirmp: evt.target.value,
        });
    }

    handlePassChange = (evt) => {
        this.setState({
            password: evt.target.value,
        });
    }

    render() {
      return (
        <div className={styles.login}>
            <div className={styles.form}>
                <form onSubmit={this.handleSubmit}>
                    {
                        this.state.error &&
                        <h3 data-test="error" onClick={this.dismissError}>
                            <button onClick={this.dismissError}>✖</button>
                            {this.state.error}
                        </h3>
                    }
                    <div className={styles.headtop}>
                      <img className={styles.img} src={Logo} alt={"Logo"}/>
                      <label >Reset</label>
                    </div>
                    <input type="text" data-test="username" placeholder="Email" value={this.state.username}
                           onChange={this.handleUserChange}/>
                    <input type="password" data-test="password" placeholder="Password" value={this.state.password}
                           onChange={this.handlePassChange}/>
                    <input type="password" data-test="confirmp" placeholder="Password" value={this.state.confirmp}
                           onChange={this.handleComfirmpChange}/>
                    <div className={styles.func}>
                        <NavLink to={"/login"}>Login</NavLink>
                        <button className={styles.but1} type="submit" data-test="submit">Next</button>
                    </div>
                </form>
            </div>
        </div>
      );
    }
}

export default LoginPage;
