import React from "react";
import { connect } from "react-redux";
import { getCourse } from "../../../../store/actions/courseActions";
import './CourseWrapper.css';
import StatusBar from "../../../../components/widgets/StatusBar/StatusBar";

class CourseWrapper extends React.Component{

    constructor(props){
        super(props);  
        this.props.getCourseTest("noUse");
    }

    render(){    
        console.log(this.props.currentCourse[0])
        return(
            <div  className="coursePageDashBoard">
                {/* <Fragment> */}
                    <div className={"coursePageLeftPart"}>
                        {/* temp */}
                        {this.props.currentCourse.length < 1 ? null : this.props.currentCourse[0]["units"]}
                    </div>      

                    <div className={"coursePageCenterPart"}>
                        {/* <backtrace /> */}
                        <div>
                            <h1 className={"coursePageCourseSubjAndNum"}>
                                {this.props.currentCourse.length < 1 ? null : this.props.currentCourse[0]["subject"]
                                + " " + this.props.currentCourse[0]["number"]}
                            </h1>
                        </div>

                        {/* small table containing Career, Units, Academic Group, Academic Organization */}
                        <div className="mytable">
                            <div className="column1"></div>
                            <div className="column2"></div>
                            <div className="column3"></div>
                            <div className="column4"></div>
                            <div className="myrow">
                                <div className="mycellHeader">Career</div>
                                <div className="mycell">{this.props.currentCourse.length < 1 ? null : this.props.currentCourse[0]["career"]}</div>
                                <div className="mycellHeader">Academic Group</div>
                                <div className="mycell" >{this.props.currentCourse.length < 1 ? null : this.props.currentCourse[0]["academic_group"]}</div>
                            </div>
                            <div className="myrow">
                                <div className="mycellHeader">Units</div>
                                <div className="mycell" style={{color:"green"}}>{this.props.currentCourse.length < 1 ? null : this.props.currentCourse[0]["units"]}</div>
                                <div className="mycellHeader">Academic Organization</div>
                                <div className="mycell">{this.props.currentCourse.length < 1 ? null : this.props.currentCourse[0]["academic_organization"]}</div>
                            </div>
                            
                        </div>

                        <div className="mytable" style={{marginTop:"3.5rem"}}>
                            <div className="column1"></div>
                            <div className="column5"></div>
                            <div className="myrow">
                                <div className="mycellHeader">Description</div>
                                <div className="mycellWholeRight">{this.props.currentCourse.length < 1 ? null : this.props.currentCourse[0]["course_description"]}</div>
                            </div>
                        </div>

                        {/* 有另外的api calls 来接收页面上的courseObj的前提条件们 */}
                        <div className="mytable" style={{marginTop:"1.5rem"}}>
                            <div className="column1"></div>
                            <div className="column5"></div>
                            <div className="myrow">
                                <div className="mycellHeader">Prerequisite</div>
                            </div>

                            <div className="myrow">
                                {/* Prerequisite bars */}
                                <div className="mycellWholeRight">
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
                                {/* <div className="mycellWholeRight">{this.props.currentCourse.length < 1 ? null : this.props.currentCourse[0]["course_description"]}</div> */}
                        </div>

                        {/* getCourse也有另外的api(), 所以也可能isolate*/}
                        {/* Course Load Part */}
                        <div className="mytable" style={{marginTop:"2rem"}}>
                            <div className="column6"></div>
                            <div className="column5"></div>
                            <div className="myrow">
                                <div className="mycellHeader">Course Load</div>
                            </div>
                            <div className="myrow">
                                {/* designed Component */}
                                <div className="mycellWholeRight">{this.props.currentCourse.length < 1 ? null : this.props.currentCourse[0]["course_description"]}</div>
                            </div>
                        </div>

                    </div>







                    <div className={"coursePageRightPart"}>
                        {/* temp */}
                        {this.props.currentCourse.length < 1 ? null : this.props.currentCourse[0]["units"]}
                    </div> 
                {/* </Fragment> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        currentCourse: state.courses.currentCourse,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        getCourseTest: noUse => dispatch(getCourse(noUse)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CourseWrapper);