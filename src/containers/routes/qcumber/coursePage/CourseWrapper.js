import React from "react";
import { connect } from "react-redux";
import { getCourse } from "../../../../store/actions/courseActions";
import StatusBar from "../../../../components/common/statusBar/StatusBar";
import styles from './CourseWrapper.module.css';
import { PieCharts } from "../../../../components/common/charts/PieCharts";
import ScheduleSection from "./scheduleSection/ScheduleSection";
import { fetchCourseTimeTable } from "../../../../utilities/courseDetailActions/fetchCourseTimeTable";

class CourseWrapper extends React.Component{
    constructor(props){
        super(props);
        // its not in store, bc the registered one in store is the one shared by the section & course planner
        // initial state of this component
        this.state = {
            courseSchedule: [{
                'name': '001',
                'id': '4467',
                'type': 'lecture',
                'professor': 'Tian Yuan',
                'location': 'Chernoff Aud',
                'schedule': [{'time':'8:30am - 9:30am',
                                'weekday': 'Tue'},
                            {'time': '10:30am - 11:30am',
                                'weekday': 'Wed'}],
                'status': 'valid',
                'duration': '2019/01/07 - 2019/04/05' // can use intl.DateFormat later on if needed 
            }, 
            {
                'name': '003',
                'id': '4469',
                'type': 'lecture',
                'professor': 'Tian Yuan',
                'location': 'Chernoff Aud',
                'schedule': [{'time':'8:30am - 9:30am',
                                'weekday': 'Tue'},
                            {'time': '10:30am - 11:30am',
                                'weekday': 'Wed'}],
                'status': 'valid',
                'duration': '2019/01/07 - 2019/04/05' // can use intl.DateFormat later on if needed 
            },
            {
                'name': '002',
                'id': '4468',
                'type': 'lab',
                'professor': 'Tian Yuan',
                'location': 'Chernoff Aud',
                'schedule': [{'time':'8:30am - 9:30am',
                                'weekday': 'Tue'},
                            {'time': '10:30am - 11:30am',
                                'weekday': 'Wed'}],
                'status': 'valid',
                'duration': '2019/01/07 - 2019/04/05' // can use intl.DateFormat later on if needed 
            }],
        };
    };

    handleCourseTimeTable = (res) =>{
        // TODO: add an intermediate interface
        res.json().then(result => {
            this.setState({
                courseSchedule: result 
            });
        })
    }

    componentDidMount(){
        this.props.getCourseTest("noUse");

        // uncoment this later on when demo
        // fetchCourseTimeTable(this.props.currentCourse[0]['uuid'], this.handleCourseTimeTable);
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
                            {/* <div className="column6"></div> */}
                            {/* <div className={styles.column5}></div> */}
                            <div className={styles.myrow}>
                                <div className={styles.mycellHeader}>Course Load</div>
                            </div>
                            {/* <div className={styles.myrow}>
                                <StatusBar
                                    prerequisiteItem={"C- in CISC124"}
                                    userGrade={"Not Taken Yet"}
                                    valid={"nonValid"} />
                            </div> */}
                        </div>

                        <div className={styles.mytable} style={{marginTop:"2rem"}}>
                            <div className="column6"></div>
                            <div className={styles.column5}></div>
                            <div className={styles.myrow}>
                                <div className={styles.mycellHeader}>Sections</div>
                            </div>

                            <div className={styles.myrow}>
                                <ScheduleSection 
                                    schedule={this.state.courseSchedule}                                   
                                />
                            </div>
                        </div>

                    </div>

                    <div className={styles.coursePageRightPart}>
                        {/* temp */}
                        <div className={styles.mytable} style={{marginTop:"2rem"}}>
                            {/* <div className="column6"></div>
                            <div className={styles.column5}></div> */}
                            <div className={styles.myrow}>
                                <div className={styles.mycellHeader}>Grade Distribution</div>
                            </div>
                            <div className={styles.myrow}>
                                {/* TODO: feed this as an variable */}
                                <PieCharts course={"ELEC 390"}/>
                            </div>
                        </div>
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
