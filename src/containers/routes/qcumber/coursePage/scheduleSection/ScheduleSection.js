import React, { Component, Fragment } from "react";
import SectionBlock from "./sectionBlock/SectionBlock";

// ```
// This is where Schedule section interact with planner
// timetable by usingredux store
//
// 'registeredTimeTable' is not the list of fetched results
// but the shared ones between planner and itself
//
// 'addTimeBlock' is the onClick event in Select btn.
//
// ```

class ScheduleSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lectures: [],
            labs: [],
            tutorials: [],
        };
    }

    componentDidMount = () => {
        const lecTmp = [];
        const labTmp = [];
        const tutTmp = [];

        for (const index in this.props.schedule) {
            // TODO modify this to the right accessing path
            if (this.props.schedule[index]["type"] === "lecture") {
                lecTmp.push(this.props.schedule[index]);
            } else if (this.props.schedule[index]["type"] === "lab") {
                labTmp.push(this.props.schedule[index]);
            } else {
                tutTmp.push(this.props.schedule[index]);
            }
        }

        this.setState({
            lectures: lecTmp,
            labs: labTmp,
            tutorials: tutTmp,
        });
    };

    render() {
        return (
            <Fragment>
                {/* TODO: intl format languages */}
                {this.state.lectures.length > 0 ? (
                    <SectionBlock title={"Mandatory Lecture"} section={this.state.lectures} />
                ) : undefined}

                {this.state.labs.length > 0 ? (
                    <SectionBlock title={"Mandatory Lab"} section={this.state.labs} />
                ) : undefined}

                {this.state.tutorials.length > 0 ? (
                    <SectionBlock title={"Mandatory Tutorial"} section={this.state.tutorials} />
                ) : undefined}
            </Fragment>
        );
    }
}

export default ScheduleSection;
