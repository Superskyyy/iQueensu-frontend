import React from "react";
import { connect } from "react-redux";
import { getCourse } from "../../../../store/actions/courseActions";
import './CourseWrapper.css';

class CourseWrapper extends React.Component{

    constructor(props){
        super(props);  
        this.props.getCourseTest("noUse");
    }

    render(){    
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
                        {/* <span className={"coursePageCourseSubjAndNum"}>
                            {this.props.currentCourse.length < 1 ? null : this.props.currentCourse[0]["subject"]
                            + " " + this.props.currentCourse[0]["number"]}
                        </span> */}
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