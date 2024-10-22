// Packages
import React, {Component}                    from 'react';
import {connect}                             from "react-redux";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
//
import Navigation, {NavItem}                 from "../components/layouts/Navigation";
import actions                               from "../store/actions/root";
import history                               from "../utils/history";
import Footer                                from "../components/layouts/Footer";
// Styles
import styles                                from './App.module.css';
// Pages
import Home                                  from "./routes/Home";
import NotFound                              from "./routes/NotFound";
import Qhousing                              from "./routes/qhousing/Qhousing";

//import QcumberLayout                         from './routes/qucumber/QcumberLayout';
import LoginPage                             from "./routes/login/LoginPage";
import SignUp                                from "./routes/login/SignUp";
import ForgetPage                            from "./routes/login/forget/forget";
import QcumberLayout                        from './routes/qcumber/QcumberLayout';
import { URL_PATHS }                        from '../utilities/constants/constants';
import { isDev } from '../utilities/testFor';
import TestingPlayground from './routes/ONLY_FOR_TESTING/testingPlayground';

class App extends Component {
    constructor(props) {
        super(props);
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    changeLanguage() {
        let lang = this.props.locale;
        lang = lang === 'zh' ? 'en' : 'zh';
        this.props.changeLanguage(lang);
    }

    render() {
        const {locale} = this.props;
        return (
            <div className={styles.App}>
                <main id={"QMainContent"} className={styles.MainContent}>
                    {/* remove later */}
                    {/* <QcumberWrapper > */}
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/404" exact component={NotFound}/>

                            <Route path={URL_PATHS.QHOUSING_PATH} exact component={Qhousing}/>
                            {/* <Route path="/qcumber" exact component={Qcumber}/> */}
                            <Route path={URL_PATHS.QCUMBER_PATH} exact component={QcumberLayout}/>
                            <Route path={URL_PATHS.DATABASE_PATH} exact component={QcumberLayout}/>
                            <Route path={URL_PATHS.DATABASE_COURSE_PATH} component={QcumberLayout}/>
                            <Route path={URL_PATHS.DATABASE_SEARCH_PATH} component={QcumberLayout}/>
                            <Route path={URL_PATHS.LOGIN_PATH} exact component={LoginPage}/>
                            <Route path={URL_PATHS.SIGNUP_PATH} exact component={SignUp}/>
                            <Route path={URL_PATHS.FORGET_PATH} exact component={ForgetPage}/>
                            {isDev() ? <Route path={URL_PATHS.TESTING_ONLY} exact component={TestingPlayground}/> : <></>}
                            <Redirect from="*" to="/404"/>
                        </Switch>
                    {/* </QcumberWrapper> */}
                </main>
                <Navigation>
                    <NavItem event={() => {
                        history.push("/");
                    }} name={"Home"}/>
                    <NavItem event={() => {
                        history.goBack();
                    }} name={"Back"}/>
                    <NavItem event={() => this.changeLanguage()} name={locale === 'zh' ? '英文' : 'Chinese'}/>
                </Navigation>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    locale: state.root.language,
});
const mapDispatchToProps = (dispatch) => ({
    changeLanguage: (val) => dispatch(actions.changeLanguage(val))
});
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
    undefined,
    {pure: false}
)(App));
