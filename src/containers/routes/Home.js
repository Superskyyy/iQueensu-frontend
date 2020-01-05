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
                    <div className="navbar">
                        <div className="navBarList">
                        {/* <XHelmet title={"iQueensU"} favicon={logo}/>
                        <h3><Text id={"home"}/></h3>
                        <NavLink to={"/qhousing"}>Go Qhousing</NavLink><br/>
                        <NavLink to={"/qucumber"}>Go Qucumber</NavLink><br/> */}
                        <XHelmet title={"iQueensU"} favicon={logo}/>
                        <NavLink to={"/"} activeClassName="chosen"><Text id={"home"}/></NavLink>
                        <NavLink to={"/test1"} activeClassName="chosen"><Text id={"forum"}/></NavLink>
                        <NavLink to={"/qhousing"} activeClassName="chosen">Qhousing</NavLink>
                        <NavLink to={"/qucumber"} activeClassName="chosen">Qucumber</NavLink> 
                        <NavLink to={"/test3"} activeClassName="chosen" style={{"margin":"0px 59px 0px 8px"}}>Qwiki</NavLink>
                        <NavLink to={"/test4"} activeClassName="chosen"><Text id={"contact"}/></NavLink> 
                        <NavLink to={"/test4"} activeClassName="chosen"><Text id={"about"}/></NavLink> 
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(Home)
