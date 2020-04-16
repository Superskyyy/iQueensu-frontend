import React, {Fragment} from 'react';
import styles            from './CourseLoadBar.module.css';

const CourseLoadBar = props => {

    const studyLoad = props.workLoad;
    const headTypeShort = {
        Total: "Total", // added total we need this to avoid failed render when tooltip doesn't have a total-- sky
        L: "Lecture",
        S: "Seminar",
        Lb: "Laboratory",
        T: "Tutorial",
        G: "Group",
        I: "Individual",
        O: "Online",
        Oc: "Off-campus",
        Pc: "Practicum",
        P: "Private"
        // L = Lectures; S=Seminars; Lb = Laboratories; T = Tutorials; G = Group Learning; I = Individual
        // Instruction; O = Online Activities; Oc = Off-campus Activity; Pc = Practicum; P = Private Study
    };
    const headTypeTooltip = {
        Total: "Total Hours of Work",
        L: "Lecture",
        S: "Seminar",
        Lb: "Laboratory",
        T: "Tutorial",
        G: "Group Learning",
        I: "Individual Instruction",
        O: "Online Activity",
        Oc: "Off-campus Activity",
        Pc: "Practicum",
        P: "Private Study"
        // L = Lectures; S=Seminars; Lb = Laboratories; T = Tutorials; G = Group Learning; I = Individual
        // Instruction; O = Online Activities; Oc = Off-campus Activity; Pc = Practicum; P = Private Study
    };
    if (studyLoad === "-1" || studyLoad === undefined) {
        return "";
    } else {
        //1: total
        let workString = "";
        console.log(studyLoad);
        let totalTime = studyLoad.match(/\d+/);
        workString = (studyLoad).replace(/.+[(]/, "").slice(0, workString.length - 1);
        workString = workString.split(";");// workString should be [36L,24Lb,60P]
        console.log("totalTime", totalTime, "workString", workString);// totalTime should be "120"
        //2:find the completed headers and contexts
        let headers = ["Total"];
        let hours = [totalTime];
        for (let j = 0; j < workString.length; j++) {
            console.log(hours);
            hours.push((workString[j]).match(/\d+/));
            headers.push((workString[j]).match(/[a-z]+/i));
        }
        console.log("hours:", hours, "headers:", headers);

        let rows = Math.ceil(headers.length / 6);
        console.log(rows);
        let renderList = [];

        for (let row = 0; row < rows; row++) {
            renderList.push(
                <Fragment>
                    <div className={styles.headS}>
                        <div className={styles.tableHeadWrapper}>
                            {headers.slice(row * 6, row * 6 + 6).map(header => {
                                return (
                                    <div key={header} className={styles.tableHead}>
                                        <abbr title={headTypeTooltip[header]} className={styles.headTitle}>
                                            {headTypeShort[header] ? headTypeShort[header] : "Unknown"}
                                        </abbr>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={styles.tableCell}>
                        <div className={styles.tableContentWrapper}>
                            {hours.slice(row * 6, row * 6 + 6).map(content => {
                                if (content === totalTime) {
                                    if (parseInt(totalTime) === 120) {
                                        return (
                                            <div key={content} className={styles.levelContent}>
                                                <div className={styles.regularLoad}></div>
                                                <span className={styles.levelContentText}> {content} Hours</span>
                                            </div>);
                                    } else if (parseInt(totalTime) < 120) {
                                        return (
                                            <div key={content} className={styles.levelContent}>
                                                <div className={styles.lightLoad}></div>
                                                <span className={styles.levelContentText}> {content} Hours</span>
                                            </div>);
                                    } else {
                                        return (
                                            <div key={content} className={styles.levelContent}>
                                                <div className={styles.hardLoad}></div>
                                                <span className={styles.levelContentText}> {content} Hours</span>
                                            </div>);
                                    }
                                } else {
                                    return (
                                        <span className={styles.levelContent}>{content} Hours</span>);
                                }
                            })}
                        </div>
                    </div>
                </Fragment>
            );
        }
        return (
            renderList
        );
    }
};
export default CourseLoadBar;
