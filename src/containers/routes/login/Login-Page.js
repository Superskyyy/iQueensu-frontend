import React, { Component } from 'react';
import stylee               from './Logi.module.css'
//import './App.css';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '',
      regist:false,
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }

    return this.setState({ error: '' });
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

  const login = (
    <div className={stylee.login}>
      <div className={stylee.form}>
        <form className={stylee.loginform} onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
            <label>Login</label>
            <input type="text" data-test="username" placeholder = "Email" value={this.state.username} onChange={this.handleUserChange} />
            <input type="password" data-test="password" placeholder = "Pasddword" value={this.state.password} onChange={this.handlePassChange} />
            <div className={stylee.func}>
              <button type="submit" data-test="submit">Login</button>
              <a  className={stylee.change} href="#" onclick={()=>{this.setState((state, prop)=>({regist:!state.regist}));}}>Register</a>
            </div>
        </form>
      </div>
    </div>
  )

  const reg = (
    <div className={stylee.login}>
      <div className={stylee.form}>
        <form className={stylee.submit} onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
            <label>Register</label>
            <input type="text" data-test="username" placeholder = "Email" value={this.state.username} onChange={this.handleUserChange} />
            <input type="password" data-test="password" placeholder = "Pasddword" value={this.state.password} onChange={this.handlePassChange} />
            <div className={stylee.func}>
              <button type="submit" data-test="submit">Next</button>
              <a  className={stylee.change} href="#" onclick={()=>{this.setState((state, prop)=>({regist:!state.regist}));}}>Sign in</a>
            </div>
        </form>
      </div>
    </div>
  )

  render() {
    if (!this.state.regist){
      return this.login;
    } else{
      return this.reg;
    }
  }
}

export default LoginPage;
