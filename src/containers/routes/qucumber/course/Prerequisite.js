// Packages
import PropTypes         from "prop-types";
import React, {Fragment} from "react";

const Item = (props) => (
    <Fragment>
        <h1>{props.requirement}</h1>
        <p>{props.status}</p>
    </Fragment>
);
Item.prototype = {
    requirement: PropTypes.string,
    status: PropTypes.string
};
Item.defaultProps = {
    requirement: "",
    status: ""
};

export default (props) => (
    <Fragment>
        {props.title}
        {props.children}
    </Fragment>
)
