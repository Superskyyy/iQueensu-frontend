import React,{Fragment} from "react"
import styled from 'styled-components';
import PropTypes from "prop-types"
import {TermChoice} from "../../../../components/accessories/ChoiceBox";

const Wrapper = styled.section`
  min-width: 100%;
  justify-content: center;
  background-color: #e8e8e8;
`;

export const Section = (props) => (
    <Fragment>
        {props.title}
        {props.id}
        {props.status}
        {props.conflict}
    </Fragment>
);
Section.prototype = {
    title: PropTypes.string,
    id: PropTypes.number,
    status: PropTypes.string,
    conflict: PropTypes.string
};
Section.defaultProps = {
    title: "",
    id: -1,
    status: "",
    conflict: ""
};

export const Sections = (props) => (
    <Fragment>
        <TermChoice />
        {props.status}
        {props.children}
    </Fragment>
);
Sections.prototype = {
    title: PropTypes.string,
    id: PropTypes.number,
    status: PropTypes.string,
    conflict: PropTypes.string
};
Sections.defaultProps = {
    title: "",
    id: -1,
    status: "",
    conflict: ""
};

