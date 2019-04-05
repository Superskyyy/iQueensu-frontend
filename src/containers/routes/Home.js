import React, {Component, Fragment} from 'react';
import {NavLink, withRouter} from "react-router-dom";
import Text from "../../components/accessories/Text";
import XHelmet from "../../components/accessories/XHelmet";
import {logo} from "../../assets/exportImages";

class Home extends Component{
    render() {
        return(
            <Fragment>
                <XHelmet title={"iQueensU"} favicon={logo}/>
                <h3><Text id={"home"}/></h3>
                <NavLink to={"/qhousing"}>Go Qhousing</NavLink><br/>
                <NavLink to={"/qucumber"}>Go Qucumber</NavLink><br/>
                <br/>
            </Fragment>
        )
    }
}

export default withRouter(Home)
