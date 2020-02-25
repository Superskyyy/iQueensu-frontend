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
                        <div className={styles.tableHead}>
                            <span className={styles.headTitle} >{header}</span>
                        </div>)})
                }
                </div>
                {/* Lecture */}
                {/* <div className={styles.tableHead} style={{marginLeft: '32px'}}>
                    <span className={styles.headTitle} >{props.title1}</span>
                </div> */}
                {/* Tutorial */}
                {/* <div className={styles.tableHead}>
                    <span className={styles.headTitle} >{props.title2}</span>
                </div> */}
                {/* Lab */}
                {/* <div className={styles.tableHead}>
                    <span className={styles.headTitle} >{props.title3}</span>
                </div> */}
                {/* Practice */}
                {/* <div className={styles.tableHead}>
                    <span className={styles.headTitle} >{props.title4}</span>
                </div> */}
                {/* Total */}
                {/* <div className={styles.tableHead}>
                    <span className={styles.headTitle} >{props.title5}</span>
                </div> */}
                {/* Load */}
                {/* <div className={styles.tableHead}>
                    <span className={styles.headTitle} >{props.title6}</span>
                </div> */}
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
                <div className={styles.tableCell}>
                    <span className={styles.levelContent} >{props.load}</span>
                </div>
            </div>
        </Fragment>
    )
}

export default CourseLoadBar;