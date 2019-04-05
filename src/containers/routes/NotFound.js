import React, {Component, Fragment} from 'react';
import {NavLink, withRouter} from "react-router-dom";
import Text from "../../components/accessories/Text";

class NotFound extends Component{
    render() {
        return(
            <Fragment>
                <h3><Text id={"notfound"}/></h3>
                <NavLink to={"/"}>Go Home</NavLink>
                <br/>
            </Fragment>
        )
    }
}

export default withRouter(NotFound)
