// Packages
import PropTypes         from "prop-types";
import React, {Fragment} from "react";
//
import {TermChoice}      from "../../../../components/accessories/ChoiceBox";
// Styles

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
        <TermChoice/>
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

