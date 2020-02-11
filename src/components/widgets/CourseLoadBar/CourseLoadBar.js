import React, { Fragment } from 'react';
import styles from './CourseLoadBar.module.css';


const CourseLoadBar = props => {
    return(
        <Fragment>
            {/*title row*/}
            <div className={`${styles.levelCourseLoadBar} ${styles.headS}`}>
                {/* Lecture */}
                <div style={{display:"flex"}}>
                    <span className={styles.headTitle} >{props.title1}</span>
                </div>
                {/* Tutorial */}
                <div style={{display:"flex"}}>
                    <span className={styles.headTitle} >{props.title2}</span>
                </div>
                {/* Lab */}
                <div style={{display:"flex"}}>
                    <span className={styles.headTitle} >{props.title3}</span>
                </div>
                {/* Practice */}
                <div style={{display:"flex"}}>
                    <span className={styles.headTitle} >{props.title4}</span>
                </div>
                {/* Total */}
                <div style={{display:"flex"}}>
                    <span className={styles.headTitle} >{props.title5}</span>
                </div>
                {/* Load */}
                <div style={{display:"flex"}}>
                    <span className={styles.headTitle} >{props.title6}</span>
                </div>
            </div>
            {/* content row */}
            <div className={`${styles.levelCourseLoadBar}`}>
                {/* Lecture */}
                <div style={{display:"flex"}}>
                    <span className={styles.levelContent} >{props.lecture}</span>
                </div>
                {/* Tutorial */}
                <div style={{display:"flex"}}>
                    <span className={styles.levelContent} >{props.tutorial}</span>
                </div>
                {/* Lab */}
                <div style={{display:"flex"}}>
                    <span className={styles.levelContent} >{props.lab}</span>
                </div>
                {/* Practice */}
                <div style={{display:"flex"}}>
                    <span className={styles.levelContent} >{props.practice}</span>
                </div>
                {/* Total */}
                <div style={{display:"flex"}}>
                    <span className={styles.levelContent} >{props.total}</span>
                </div>
                {/* Load */}
                <div style={{display:"flex"}}>
                    <span className={styles.levelContent} >{props.load}</span>
                </div>
            </div>
        </Fragment>
    )
}

export default CourseLoadBar;