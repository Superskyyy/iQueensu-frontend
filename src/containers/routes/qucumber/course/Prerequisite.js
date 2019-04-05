import React, {Fragment} from "react";
import PropTypes from "prop-types";

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
