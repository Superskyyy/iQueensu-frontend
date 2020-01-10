// Packages
import React, {Component} from "react";
import {withRouter}       from "react-router-dom";
//
import CourseWrapper      from "./CourseWrapper";
import HeaderBar          from "../../../../components/widgets/HeaderBar/HeaderBar";
// Styles
import styles             from "./CoursePage.module.css";

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
            <div className={styles.Wrapper}>
                <HeaderBar hasRightAlignedItems={true}/>

                <CourseWrapper>
                    {/* childern render first, because its part of property */}
                </CourseWrapper>
            </div>
        );
    }
}


export default withRouter(CoursePage);
