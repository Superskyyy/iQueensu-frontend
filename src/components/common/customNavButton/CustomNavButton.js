// Packages
import React     from "react";
import {NavLink} from "react-router-dom";
// Styles
import styles from './CustomNavButton.module.css';

class CustomNavButton extends React.Component {

    handleOnClick = () => {
        if (this.props.onClick === undefined) {
            //default
            window.alert("this is the default btn behavior");
        } else {
            this.props.onClick();
        }
    };

    render() {
        return (
            <React.Fragment>
                <div className={styles.TextBtnWrapper}>
                    <NavLink to={this.props.toWhere} className={styles.TextBtn}>{this.props.btnText}</NavLink>
                </div>
            </React.Fragment>
        );
    }

}

export default CustomNavButton;
