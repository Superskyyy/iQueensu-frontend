// Packages
import React       from "react";
import {connect}   from "react-redux";
//
import {getCourse} from "../../../../store/actions/courseActions";
// Styles
import styles      from './CourseWrapper.module.css';

class CourseWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.props.getCourseTest("noUse");
    }

    render() {
        return (
            <div className={styles.CoursePageFlewContainer}>
                {/* <Fragment> */}
                <div className={styles.CoursePageLeftPart}>
                    {/* temp */}
                    {this.props.currentCourse.length < 1 ? null : this.props.currentCourse[0]["units"]}
                </div>

                <div className={styles.CoursePageCenterPart}>
                    {/* <backtrace /> */}
                    <h1 className={styles.CoursePageCourseSubjAndNum}>
                        {this.props.currentCourse.length < 1 ? null : this.props.currentCourse[0]["subject"]
                            + " " + this.props.currentCourse[0]["number"]}
                    </h1>
                    <h1 className={styles.CoursePageCourseSubjAndNum}>
                        {this.props.currentCourse.length < 1 ? null : this.props.currentCourse[0]["subject"]
                            + " " + this.props.currentCourse[0]["number"]}
                    </h1>
                </div>

                <div className={styles.CoursePageRightPart}>
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
