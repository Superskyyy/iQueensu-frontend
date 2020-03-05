import React from "react";
import { connect } from "react-redux";
import { getCourse } from "../../../../store/actions/courseActions";
import StatusBar from "../../../../components/common/statusBar/StatusBar";
import CourseLoadBar from "../../../../components/common/courseLoadBar/CourseLoadBar";
import styles from './CourseWrapper.module.css';
import dataCourseLoad from "../coursePage/CourseLoad/dataCourseLoad";


class CourseWrapper extends React.Component{
    componentDidMount(){
        this.props.getCourseTest("noUse"); 

    }

    render(){    
        return(
            
            <div  className={styles.coursePageDashBoard}> 
                {/* <Fragment> */}
                
                    <div className={styles.coursePageLeftPart}>
                        {/* temp */}
                        {this.props.currentCourse.length < 1 ? null : this.props.currentCourse[0]["units"]}
                    </div>      

                    <div className={styles.coursePageCenterPart}>
                        {/* <backtrace /> */}
                        <div>
                            <h1 className={styles.coursePageCourseSubjAndNum}>
                                {this.props.currentCourse.length < 1 ? null : this.props.currentCourse[0]["subject"]
                                + " " + this.props.currentCourse[0]["number"]}
                            </h1>
                        </div>

                        {/* small table containing Career, Units, Academic Group, Academic Organization */}
                        <div className={styles.mytable}>
                            <div className={styles.column1}></div>
                            <div className={styles.column2}></div>
                            <div className={styles.column3}></div>
                            <div className={styles.column4}></div>
                            <div className={styles.myrow}>
                                <div className={styles.mycellHeader}>Career</div>
                                <div className={styles.mycell}>{this.props.currentCourse.length < 1 ? null : this.props.currentCourse[0]["career"]}</div>
                                <div className={styles.mycellHeader}>Academic Group</div>
                                <div className={styles.mycell} >{this.props.currentCourse.length < 1 ? null : this.props.currentCourse[0]["academic_group"]}</div>
                            </div>
                            <div className={styles.myrow}>
                                <div className={styles.mycellHeader}>Units</div>
                                <div className={styles.mycell} style={{color:"green"}}>{this.props.currentCourse.length < 1 ? null : this.props.currentCourse[0]["units"]}</div>
                                <div className={styles.mycellHeader}>Academic Organization</div>
                                <div className={styles.mycell}>{this.props.currentCourse.length < 1 ? null : this.props.currentCourse[0]["academic_organization"]}</div>
                            </div>
                            
                        </div>

                        <div className={styles.mytable} style={{marginTop:"3.5rem"}}>
                            <div className={styles.column1}></div>
                            <div className={styles.column5}></div>
                            <div className={styles.myrow}>
                                <div className={styles.mycellHeader}>Description</div>
                                <div className={styles.mycellWholeRight}>{this.props.currentCourse.length < 1 ? null : this.props.currentCourse[0]["course_description"]}</div>
                            </div>
                        </div>

                        {/* 有另外的api calls 来接收页面上的courseObj的前提条件们 */}
                        <div className={styles.mytable} style={{marginTop:"1.5rem"}}>
                            <div className={styles.column1}></div>
                            <div className={styles.myrow}>
                                <div className={styles.mycellHeader}>Prerequisite</div>
                            </div>

                            <div className={styles.myrow}>
                                {/* Prerequisite bars */}
                                <div className={styles.mycellWholeRight}>
                                    {/* a must have: the level bar */}
                                    <StatusBar
                                        prerequisiteItem={"Level of study: 2 or above"}
                                        userGrade={"Level 2"}
                                        valid={"valid"} />
                                    
                                    {/* optional using .map particular course */}
                                    {/* green */}
                                    <StatusBar
                                        prerequisiteItem={"C- in CISC203"}
                                        userGrade={"2018 Fall A+"}
                                        valid={"valid"}/>

                                    {/* red */}
                                    <StatusBar
                                        prerequisiteItem={"C- in CISC124"}
                                        userGrade={"Not Taken Yet"}
                                        valid={"nonValid"} />

                                    {/* 按钮和那个dropdown */}

                                </div>
                            </div>
                                {/* <div className={styles.mycellWholeRight}>{this.props.currentCourse.length < 1 ? null : this.props.currentCourse[0]["course_description"]}</div> */}
                        </div>

                        {/* getCourse也有另外的api(), 所以也可能isolate*/}
                        {/* Course Load Part */}
                        <div className={styles.mytable} style={{marginTop:"2rem"}}>
                            <div className="column6"></div>
                            <div className={styles.column5}></div>
                            <div className={styles.myrow}>
                                <div className={styles.mycellHeader}>Course Load</div>
                            </div>

                            <div className={styles.myrow}>
                                {/* designed Component */}
                                <dataCourseLoad />
                                <CourseLoadBar
                                        tableHeaders = {["Lecture", "Tutorial", "Lab", "Practice", "Total", "Load"]}                                      
                                        lecture={"3 h/week"}
                                        tutorial={"-"}
                                        lab={"1 h/week"}
                                        practice={"6 h/week"}
                                        total={"10 h/week"}
                                        totalPerTerm={"120 h/term"}
                                        load={"Regular"} />
                               
                                
                            </div>
                        </div>

                    </div>

                    <div className={styles.coursePageRightPart}>
                        {/* temp */}
                        {this.props.currentCourse.length < 1 ? null : this.props.currentCourse[0]["units"]}
                    </div> 
                {/* </Fragment> */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentCourse: state.courses.currentCourse,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getCourseTest: noUse => dispatch(getCourse(noUse)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseWrapper);
