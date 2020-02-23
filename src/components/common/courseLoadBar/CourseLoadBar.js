import React, { Fragment } from 'react';
import styles from './CourseLoadBar.module.css';

const CourseLoadBar = props => {

    let tableHeaders = props.tableHeaders;

    return(
        <Fragment>
            <div className={styles.headS}>
                <div className={styles.tableHeadWrapper}>
                {tableHeaders.map(header => {
                    return(
                        <div key={header} className={styles.tableHead}>
                            <span className={styles.headTitle} >{header}</span>
                        </div>)})
                }
                </div>
            </div>
            {/* content row */}
            {/* the className needs change */}
            <div className={styles.tableContentWrapper}>
                {/* Lecture */}
                <div className={styles.tableCell}>
                    <span className={styles.levelContent} >{props.lecture}</span>
                </div>
                {/* Tutorial */}
                <div className={styles.tableCell}>
                    <span className={styles.levelContent} >{props.tutorial}</span>
                </div>
                {/* Lab */}
                <div className={styles.tableCell}>
                    <span className={styles.levelContent} >{props.lab}</span>
                </div>
                {/* Practice */}
                <div className={styles.tableCell}>
                    <span className={styles.levelContent} >{props.practice}</span>
                </div>
                {/* Total */}
                <div className={styles.tableCell}>
                    <span className={styles.levelContent} >{props.total}</span>
                    <br />
                    <span className={styles.termTotal} >{props.totalPerTerm}</span>
                </div>
                {/* Load */}
                <div className={styles.loadCell}>
                    <span className={styles.token}>"|"</span>
                    <span className={styles.loadWord} >{props.load}</span>
                </div>
            </div>
        </Fragment>
    )
}

export default CourseLoadBar;