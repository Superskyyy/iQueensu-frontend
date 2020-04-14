import React, {Fragment} from 'react';
import styles            from './CourseLoadBar.module.css';

const CourseLoadBar = props => {
    // const studyLoad= props.workLoad;
    const studyLoad = "129 (30L;24T;18GL;6I;12O;9OC;24P)";
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

    if (studyLoad == "-1" || studyLoad == undefined) {
        return "";
    } else {
        let tableHeads = ["Total"];
        let tableContents = [];
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

        // Removed following lines to experiment abbreviations - sky
        //for (let k = 1; k < headers.length; k++) {
        //    headers[k] = headType[headers[k]];
        //}

        let rows = Math.ceil(headers.length / 4);
        console.log(rows);
        let renderList = [];

        // We may need to render multiple bars as there are courses with a variety of workloads. -- sky
        for (let row = 0; row < rows; row++) {

            renderList.push(
                <Fragment>

                    <div className={styles.headS}>
                        <div className={styles.tableHeadWrapper}>
                            {headers.slice(row * 4, row * 4 + 4).map(header => {
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
                            {hours.slice(row * 4, row * 4 + 4).map(content => {
                                return (
                                    <div key={content} className={styles.levelContent}>
                                        <span className={styles.levelContent}>{content} Hours</span>
                                    </div>
                                );
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


    // let tableHeaders = props.tableHeaders;
    //
    // return(
    //     <Fragment>
    //         {console.log(store.getState())}
    //         {console.log("consolelognownownonwo")}
    //         <div className={styles.headS}>
    //             <div className={styles.tableHeadWrapper}>
    //             {tableHeaders.map(header => {
    //                 return(
    //                     <div key={header} className={styles.tableHead}>
    //                         <span className={styles.headTitle} >{header}</span>
    //                     </div>)})
    //             }
    //             </div>
    //         </div>
    //         {/* content row */}
    //         {/* the className needs change */}
    //         <div className={styles.tableContentWrapper}>
    //             {/* Lecture */}
    //             <div className={styles.tableCell}>
    //                 <span className={styles.levelContent} >{props.lecture}</span>
    //             </div>
    //             {/* Tutorial */}
    //             <div className={styles.tableCell}>
    //                 <span className={styles.levelContent} >{props.tutorial}</span>
    //             </div>
    //             {/* Lab */}
    //             <div className={styles.tableCell}>
    //                 <span className={styles.levelContent} >{props.lab}</span>
    //             </div>
    //             {/* Practice */}
    //             <div className={styles.tableCell}>
    //                 <span className={styles.levelContent} >{props.practice}</span>
    //             </div>
    //             {/* Total */}
    //             <div className={styles.tableCell}>
    //                 <span className={styles.levelContent} >{props.total}</span>
    //                 <br />
    //                 <span className={styles.termTotal} >{props.totalPerTerm}</span>
    //             </div>
    //             {/* Load */}
    //             <div className={styles.loadCell}>
    //                 <span className={styles.token}>"|"</span>
    //                 <span className={styles.loadWord} >{props.load}</span>
    //             </div>
    //         </div>
    //     </Fragment>
    // )
};

export default CourseLoadBar;
