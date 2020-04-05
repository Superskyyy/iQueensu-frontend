import React, { Fragment } from "react";
import styles from "./StatusBar.module.css";
import checkMark from "../../../assets/images/Qcumber/checkMark.svg";
import banMark from "../../../assets/images/Qcumber/banMark.svg";

const StatusBar = (props) => {
    return (
        <Fragment>
            <div className={`${styles.levelStatusBar} ${styles[props.valid + "Bg"]}`}>
                <div style={{ display: "flex" }}>
                    <img src={props.valid === "valid" ? checkMark : banMark} alt="idk2" />
                    <span className={styles.levelStatus}>{props.prerequisiteItem}</span>
                </div>

                <span className={`${styles.levelStatusRight} ${styles[props.valid + "Tx"]}`}>{props.userGrade}</span>
            </div>
        </Fragment>
    );
};

export default StatusBar;
