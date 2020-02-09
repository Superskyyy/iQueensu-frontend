import React, {Component} from 'react';
import styles             from './LoginPage.module.css';
import Logo               from './qucumber.svg';
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

        return this.setState({error: ''});
    }

    handleUserChange = (evt) => {
        this.setState({
            username: evt.target.value,
        });
    }

    handlePassChange = (evt) => {
        this.setState({
            password: evt.target.value,
        });
    }

     LoginLayout = (prop) => {
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

   Reg = (prop) => {
      return (
          <>
              <div className={styles.headtop}>
                <img className={styles.img} src={Logo} alt={"Logo"}/>
                <label >Register</label>
              </div>
              <input type="text" data-test="username" placeholder="Email" value={this.state.username}
                     onChange={this.handleUserChange}/>
              <input type="password" data-test="password" placeholder="Password" value={this.state.password}
                     onChange={this.handlePassChange}/>
              <div className={styles.func}>
                  <a className={styles.change} href="#" onClick={() => {this.setState((state, prop) => ({regist: !state.regist}));}}>Sign in</a>
                  <button className={styles.but1} type="submit" data-test="submit">Next</button>
              </div>
          </>
      );
  };

   Login = (prop) => {
      return (
          <>
              <div className={styles.headtop}>
                <img className={styles.img} src={Logo} alt={"Logo"}/>
                <label >Login</label>
              </div>
              <input id={"username"} type="text" placeholder="Email" value={this.state.username}
                     onChange={this.handleUserChange}/>
              <input id={"password"} type="password"  placeholder="Password" value={this.state.password}
                     onChange={this.handlePassChange}/>
              <div className={styles.func}>
                  <a className={styles.change} href="#" onClick={() => {this.setState((state, prop) => ({regist: !state.regist}));}}>Register</a>
                  <button className={styles.but1} type="submit" data-test="submit">Login</button>
              </div>
          </>
      );
  };

   //layoutType = this.state.regist ? styles.submit : styles.loginform;

    render() {
        return (
            <this.LoginLayout type={this.layoutType}>
                {this.state.regist ? <this.Reg/> : <this.Login/>}
            </this.LoginLayout>
        );
    }
}

export default LoginPage;
