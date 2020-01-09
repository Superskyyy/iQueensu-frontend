import React from "react";
import Course from "./Course";
import { connect } from "react-redux";
import { getCourse } from "../../../../store/actions/courseActions";
import {withRouter} from "react-router-dom";

class CourseWrapper extends React.Component{

    constructor(props){
        super(props);

        this.props.getCourseTest("d");
    }

    render(){
        console.log(this.props.currentCourse)
        return(
            <React.Fragment>
                <Course courseObj={this.props.currentCourse}/>
            </React.Fragment>
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CourseWrapper));