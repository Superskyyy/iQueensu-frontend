import React, { Children } from "react";
import { connect } from "react-redux";
import { getCourse } from "../../../../store/actions/courseActions";
import { store } from "../../../../store";

class CourseWrapper extends React.Component{

    constructor(props){
        super(props);  
        this.props.getCourseTest("noUse");
    }

    render(){    
        return(
            <div>
                {/* <Fragment> */}
                <div className={"test"}>
                        {/* console.log(store.getState()) */}
                        {this.props.currentCourse.length < 1 ? null : this.props.currentCourse[0]["units"]}
                    </div>
                    <div>
                        {}
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