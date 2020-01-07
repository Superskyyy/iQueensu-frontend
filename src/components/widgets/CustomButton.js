import React from "react";
import './CustomButton.css';

class CustomButton extends React.Component{

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
                    <button onClick={this.handleOnClick} className="ContributionTextBtn">{this.props.btnText}</button>
                </div>
            </React.Fragment>
        )
    }

}

export default CustomButton;