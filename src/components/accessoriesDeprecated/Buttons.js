// Packages
import PropTypes from "prop-types";
import React, { Fragment } from "react";

export const LanBtn = (props) => (
    <Fragment>
        <div className="j-Center">{props.text}</div>
    </Fragment>
);

LanBtn.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

LanBtn.defaultProps = {
    children: null,
};
