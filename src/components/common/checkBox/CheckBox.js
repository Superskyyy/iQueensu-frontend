import React from 'react';
import classes from './CheckBox.module.scss';

const CheckBox = (props) =>{
    return(
        <label className={classes.container}>
            {props.choice}
            <input style={{marginLeft: '0px'}} id={props.choice} type={"checkBox"} />
            <span className={classes.checkMark}> </span>
            {/* </span><label for={props.choice}>{props.choice}</label> */}
        </label>
    )
}

export default CheckBox;