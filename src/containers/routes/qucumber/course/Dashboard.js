import React,{Fragment} from "react";
import styled from 'styled-components';
import PropTypes from "prop-types"
import {Sections} from "./Section";
import Prerequisite from "./Prerequisite";

const Wrapper = styled.section`
  min-width: 100%;
  justify-content: center;
  background-color: #e8e8e8;
`;

const Legend = (props) => (
    <Fragment>
        <table>
            <tr>
                <td>{props.career}</td>
                <td>{props.faculty}</td>
            </tr>
            <tr>
                <td>{props.units}</td>
                <td>{props.department}</td>
            </tr>
        </table>
    </Fragment>
);
Legend.prototype = {
    career: PropTypes.string,
    units: PropTypes.number,
    faculty: PropTypes.string,
    department: PropTypes.string
};
Legend.defaultProps = {
    career: "",
    units: -1.0,
    faculty: "",
    department: ""
};

const Description = (props) => (
  <Fragment>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
  </Fragment>
);
Description.prototype = {
    title: PropTypes.string,
    content: PropTypes.string
};
Description.defaultProps = {
    title: "",
    content: ""
};

let i = 0;
const CourseLoad = (props) => (
    <Fragment>
        <table>
            <tr>
                <td>{props.lecture}</td>
                <td>{props.tutorial}</td>
                <td>{props.lab}</td>
                <td>{props.practice}</td>
                <td>{props.total}</td>
                <td>{props.load}</td>
            </tr>
            <tr>
                <td>{props.info[i++]}</td>
                <td>{props.info[i++]}</td>
                <td>{props.info[i++]}</td>
                <td>{props.info[i++]}</td>
                <td>{props.info[i++]}</td>
                <td>{props.info[i]}</td>
            </tr>
        </table>
    </Fragment>
);
CourseLoad.prototype = {
    lecture: PropTypes.string,
    tutorial: PropTypes.string,
    lab: PropTypes.string,
    practice: PropTypes.string,
    total: PropTypes.string,
    load: PropTypes.string,
    info: PropTypes.array
};
CourseLoad.defaultProps = {
    career: "-",
    units: "-",
    faculty: "-",
    department: "-",
    info: ["-", "-", "-", "-", "-", "-", "-"]
};

export default (props) => {

    return(
        <Fragment>
            <Wrapper>
                {props.title}
                <Legend/>
                {/* <Description title={props.description.title} content={props.description.content}/> */}
                <Prerequisite />
                <Sections>
                    {props.children}
                </Sections>
            </Wrapper>
        </Fragment>
    );
}
