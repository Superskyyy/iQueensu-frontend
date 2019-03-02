import React from "react"
import {withRouter} from "react-router-dom";
import Landing from "../containers/landing/Landing";

class IndexPage extends React.Component{
    render() {
        return(
            <React.Fragment>
                <Landing/>
            </React.Fragment>
        );
    }
}

export default withRouter(IndexPage)
