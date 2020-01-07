import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux";
import history from "../utils/history";
import actions from "../store/actions/root";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Navigation, {NavItem} from "../components/layouts/Navigation"
import Footer from "../components/layouts/Footer";
// Pages
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Qhousing from "./routes/qhousing/Qhousing";
import Qucumber from "./routes/qucumber/Qucumber";
import Database from "./routes/qucumber/Database";
import Course from './routes/qucumber/course/Course';

class App extends Component {
  changeLanguage() {
    let lang = this.props.locale;
    lang = lang === 'zh' ? 'en' : 'zh';
    this.props.changeLanguage(lang);
  }
  render() {
    const { locale } = this.props;
    return (
      <div className="App">
        {/* remove later */}
        <Navigation>
          <NavItem event={() => {history.push("/")}} name={"Home"} />
          <NavItem event={() => {history.goBack()}} name={"Back"}/>
          <NavItem event={() => this.changeLanguage()} name={locale === 'zh' ? '英文' : 'Chinese'}/>
        </Navigation>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/404" exact component={NotFound} />
          <Route path="/qhousing" exact component={Qhousing} />
          <Route path="/qucumber" exact component={Qucumber} />
          <Route path={"/database"} exact component={Database}/>
          <Route path={"/database/course"} exact component={Course}/>
          <Redirect from="*" to="/404" />
        </Switch>
        <Footer />
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
