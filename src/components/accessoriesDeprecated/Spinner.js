// Packages
import React, { Fragment } from "react";
// Styles
import styles from "./Spinner.module.css";

// Default Loading
const Spinner = (props) => (
    <Fragment>
        <img
            className={styles.Wrapper}
            src={props.img}
            alt={props.text}
            style={{ animation: "spin infinite 3s linear" }}
        />
    </Fragment>
);

export default Spinner;
