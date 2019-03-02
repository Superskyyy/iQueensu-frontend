import React, {Component} from "react"
import {Redirect, Route, Switch} from "react-router-dom";

import IndexPage from "./IndexPage";
import NotFoundPage from "./NotFoundPage";
import QhousingPage from "./QhousingPage";
import QucumberPage from "./QucumberPage";

class Routes extends Component{
    render() {
        return(
            <Switch>
                <Route path="/" exact component={IndexPage} />
                <Route path="/404" exact component={NotFoundPage} />
                <Route path="/qhousing" exact component={QhousingPage} />
                <Route path="/qucumber" exact component={QucumberPage} />
                <Redirect from="*" to="/404" />
            </Switch>
        );
    }
}

export default Routes
