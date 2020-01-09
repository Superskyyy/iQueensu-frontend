import React,{Component, Fragment} from "react"
import {withRouter} from "react-router-dom";
import CourseWrapper from "./CourseWrapper";

class CoursePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: "",
        }
    }

    render() {
        return(
            <CourseWrapper>
                {/* childern render first, because its part of property */}
            </CourseWrapper>
        );
    }
}


export default withRouter(CoursePage)
