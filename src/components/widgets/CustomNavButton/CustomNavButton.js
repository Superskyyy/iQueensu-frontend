import React from "react";
import './CustomNavButton.css';
import {NavLink} from "react-router-dom";

class CustomNavButton extends React.Component{

    handleOnClick = () =>{
        if(this.props.onClick === undefined){
            //default
            window.alert("this is the default btn behavior")
        }else{
            this.props.onClick();
        }
    }
    
    render(){
        return(
            <React.Fragment>
                <div className="ContributionTextBtnWrapper">
                    <NavLink to={this.props.toWhere} className="ContributionTextBtn">{this.props.btnText}</NavLink>
                </div>
            </React.Fragment>
        )
    }

}

export default CustomNavButton;