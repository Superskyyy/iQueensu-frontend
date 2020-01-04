import React, {Component, Fragment} from 'react';
import {NavLink, withRouter} from "react-router-dom";
import Text from "../../components/accessories/Text";
import XHelmet from "../../components/accessories/XHelmet";
import {logo} from "../../assets/exportImages";
import './Home.css';

class Home extends Component{
    render() {
        return(
            <Fragment>
                <div className="InternationalHeader">
                    {/* change h1 to nav items */}
                    <h1 className="testHeader" >
                        <XHelmet title={"iQueensU"} favicon={logo}/>
                        <h3><Text id={"home"}/></h3>
                        <NavLink to={"/qhousing"}>Go Qhousing</NavLink><br/>
                        <NavLink to={"/qucumber"}>Go Qucumber</NavLink><br/>
                        <br/>
                    </h1>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(Home)
