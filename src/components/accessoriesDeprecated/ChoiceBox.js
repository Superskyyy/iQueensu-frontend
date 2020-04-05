// Packages
import PropTypes from "prop-types";
import React, { Fragment } from "react";

export const TermChoice = (props) => (
    <Fragment>
        <div className="j-Center">{props.text}</div>
    </Fragment>
);

TermChoice.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

TermChoice.defaultProps = {
    children: null,
};
