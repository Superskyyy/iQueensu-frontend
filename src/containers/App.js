// Packages
import React, {Component}                    from 'react';
import {connect}                             from "react-redux";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
<<<<<<< HEAD
import Navigation, {NavItem} from "../components/layouts/Navigation"
import Footer from "../components/layouts/Footer";
// Pages
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Qhousing from "./routes/qhousing/Qhousing";
import Qucumber from "./routes/qucumber/Qucumber";
import Database from "./routes/qucumber/Database";
import CoursePage from './routes/qucumber/course/CoursePage';

=======
//
import Navigation, {NavItem}                 from "../components/layouts/Navigation";
import actions                               from "../store/actions/root";
import history                               from "../utils/history";
import Footer                                from "../components/layouts/Footer";
>>>>>>> master
// Styles
import styles                                from './App.module.css';
// Pages
import Home                                  from "./routes/Home";
import NotFound                              from "./routes/NotFound";
import Qhousing                              from "./routes/qhousing/Qhousing";
import CoursePage                            from './routes/qucumber/course/CoursePage';
import Database                              from "./routes/qucumber/Database";
import Qucumber                              from "./routes/qucumber/Qucumber";

class App extends Component {
<<<<<<< HEAD
  changeLanguage() {
    let lang = this.props.locale;
    lang = lang === 'zh' ? 'en' : 'zh';
    this.props.changeLanguage(lang);
  }
  render() {
    const { locale } = this.props;
    return (
      <div className="App">
        <main className={wrapper.main}>
        {/* remove later */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/404" exact component={NotFound} />
            <Route path="/qhousing" exact component={Qhousing} />
            <Route path="/qucumber" exact component={Qucumber} />
            <Route path={"/database"} exact component={Database}/>
            <Route path={"/database/course"} exact component={CoursePage}/>
            <Redirect from="*" to="/404" />
          </Switch>
        </main>
        {/* <Navigation>
          <NavItem event={() => {history.push("/")}} name={"Home"} />
          <NavItem event={() => {history.goBack()}} name={"Back"}/>
          <NavItem event={() => this.changeLanguage()} name={locale === 'zh' ? '英文' : 'Chinese'}/>
        </Navigation> */}
        <Footer />
      </div>
    );
  }
=======
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
                <main className={styles.MainContent}>
                    {/* remove later */}
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/404" exact component={NotFound}/>
                        <Route path="/qhousing" exact component={Qhousing}/>
                        <Route path="/qucumber" exact component={Qucumber}/>
                        <Route path={"/database"} exact component={Database}/>
                        <Route path={"/database/course"} exact component={CoursePage}/>
                        <Redirect from="*" to="/404"/>
                    </Switch>
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
>>>>>>> master
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
