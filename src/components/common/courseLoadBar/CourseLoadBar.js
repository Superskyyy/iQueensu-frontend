import React, { Fragment }  from 'react';
import styles               from './CourseLoadBar.module.css';

class CourseLoadBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            studyLoad: typeof (this.props.workLoad) !== "undefined" ? (typeof (this.props.workLoad)).toString():undefined,
            //studyLoad should be like 120(36L;24Lb;60P)
            headType: {
                L: "Lecture",
                S: "Seminar",
                Lb:"Lab",
                T: "Tutorial",
                G: "Group Learning",
                I: "Individual Instruction",
                O: "Online Activity",
                Oc:"Off-campus Activity",
                Pc:"Practicum",
                P: "Private Study"
                // L = Lectures; S=Seminars; Lb = Laboratories; T = Tutorials; G = Group Learning; I = Individual
                // Instruction; O = Online Activities; Oc = Off-campus Activity; Pc = Practicum; P = Private Study
            },
            tableHeads: ["Total"],
            tableContents:[]
        };
    }

    render(){
        if (this.state.studyLoad == "-1"){
            return "";
        }else{
            //3 STEPS
            //1: total
            let totalTime = "";
            let workString = "";

            for (let i = 0; (this.state.studyLoad) != "(" && i < (this.state.studyLoad).length; i++) {
                totalTime += (this.state.studyLoad)[i];
                workString = (this.state.studyLoad).slice(i+1,(this.state.studyLoad).length-2);
            }

            //2:split (;;)
            workString.split(";");// workString should be [36L,24Lb,60P]
            console.log(totalTime,workString)// totalTime should be "120"

            //3:update the state with total, and new heads and contents
            this.setState({
                tableContents: [totalTime]
            });

            return ""

        }
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
}

export default CourseLoadBar;
