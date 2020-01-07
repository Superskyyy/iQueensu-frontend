import React,{Fragment} from "react";
import {NavLink, withRouter} from "react-router-dom";
import qucumberIcon from "../../assets/images/logos/qucumber.svg";
import Text from "../../components/accessories/Text";
import './HeaderBar.css';

// props:
// hasRightAlignedItems (Optional): if containing any navlink that aligns to right

class HeaderBar extends React.Component{
    render(){
        return(
            <Fragment>
            <div className="QcumberHeader" id="QcumberHeader">
                    {/* change h1 to nav items */}
                    <div className="QcumberNavbar" id="QcumberNavbar">
                        <div className="QcumberNavBarList">
                          {/* change css to design in left card.css */}
                        <NavLink to={"/qucumber"} style={
                          {"margin": "0",
                            "padding": "25px 0px"
                          }}><img width={28.2} height={28.2} src={qucumberIcon} /></NavLink>
                        
                        {/* or refactor into a separate component */}
                        <NavLink to={"/qucumber"} activeClassName="chosen" style={
                          {"fontFamily": "CalistoMT",
                           "fontSize": "20px",
                           "margin": "0px 8px 0px 3px",
                           "padding": "28px 15px 28px 0px",
                           "color": "#2d8e34",
                          }}>Qcumber</NavLink> 
                        
                        <NavLink to={"/"} activeClassName="chosen"><Text id={"home"}/></NavLink>
                        <NavLink to={"/database"} activeClassName="chosen">Database</NavLink>
                        <NavLink to={"/about"} activeClassName="chosen"><Text id={"about"}/></NavLink>
                        </div>
                     </div>
                     {this.props.hasRightAlignedItems ? 
                     <div id="QcumberNavbarRight">
                       <div id="signUp">
                        <NavLink to={"/about"}>Sign Up</NavLink>
                        </div>
                        <NavLink to={"/about"} >Sign In</NavLink>
                     </div> : null }
                </div>
            </Fragment>
        )
    }

}

export default withRouter(HeaderBar);