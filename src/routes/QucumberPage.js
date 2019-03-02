import React from "react"
import {withRouter} from "react-router-dom";
import Qucumber from "../containers/qucumber/Qucumber";

class QucumberPage extends React.Component{
    render() {
        return(
            <React.Fragment>
                <Qucumber/>
            </React.Fragment>
        );
    }
}

export default withRouter(QucumberPage)
