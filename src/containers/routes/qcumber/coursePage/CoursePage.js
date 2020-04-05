// Packages
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
//
import CourseWrapper from "./CourseWrapper";
// Styles
import styles from "./CoursePage.module.css";

class CoursePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
        };
    }

    render() {
        return (
            // put this into a separate css file?
            <div id={this.props.id} className={styles.Wrapper}>
                <CourseWrapper>{/* childern render first, because its part of property */}</CourseWrapper>
            </div>
        );
    }
}

export default withRouter(CoursePage);
