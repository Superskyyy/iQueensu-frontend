import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import styles             from './LoginPage.module.css';
import Logo               from './qucumber.svg';
import ModalContent from '../../../components/common/modal/ModalContent';

//import './App.css';
class LoginPage extends ModalContent {
// class LoginPage extends Component {
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

   Login = (prop) => {
      return (
        <>
            <button onClick={this.props.handleClose}> Click me to close</button>
            <div className={styles.headtop}>
            <img className={styles.img} src={Logo} alt={"Logo"}/>
            <label >Login</label>
            </div>
            <input id={"username"} type="text" placeholder="Email" value={this.state.username}
                    onChange={this.handleUserChange}/>
            <input id={"password"} type="password"  placeholder="Password" value={this.state.password}
                    onChange={this.handlePassChange}/>
            <NavLink to={"/forget"}>Forget password?</NavLink>
            <div className={styles.func}>
                <NavLink to={"/signup"} className={styles.change}>Register</NavLink>
                <button className={styles.but1} type="submit" data-test="submit">Login</button>
            </div>
        </>
      );
  };

   //layoutType = this.state.regist ? styles.submit : styles.loginform;

    render() {
        return (
            // <this.LoginLayout type={this.layoutType}>
            //     <button onClick={this.props.handleClose}> Click me to close</button>
            //     <div className={styles.headtop}>
            //     <img className={styles.img} src={Logo} alt={"Logo"}/>
            //     <label >Login</label>
            //     </div>
            //     <input id={"username"} type="text" placeholder="Email" value={this.state.username}
            //             onChange={this.handleUserChange}/>
            //     <input id={"password"} type="password"  placeholder="Password" value={this.state.password}
            //             onChange={this.handlePassChange}/>
            //     <NavLink to={"/forget"}>Forget password?</NavLink>
            //     <div className={styles.func}>
            //     <NavLink to={"/signup"} className={styles.change}>Register</NavLink>
            //     <button className={styles.but1} type="submit" data-test="submit">Login</button>
            //     </div>
            // </this.LoginLayout>
            <div id="commentModal" class="modal" role="dialog">
                {/* <div class="modal-dialog"> */}
                <div class={styles.modalDialog}>
                    <div class="modal-content">
                        <button style={{float: 'right'}} onClick={this.props.handleClose}>X</button>
                        <div className={styles.headtop}>
                            <img className={styles.img} src={Logo} alt={"Logo"}/>
                            <label >Login</label>
                        <input id={"username"} type="text" placeholder="Email" value={this.state.username}
                            onChange={this.handleUserChange}/>
                        <input id={"password"} type="password"  placeholder="Password" value={this.state.password}
                            onChange={this.handlePassChange}/>
                        <NavLink to={"/forget"}>Forget password?</NavLink>
                        </div>
                        <div className={styles.func}>
                            <NavLink to={"/signup"} className={styles.change}>Register</NavLink>
                            <button className={styles.but1} type="submit" data-test="submit">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;
