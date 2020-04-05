import React from "react";
import PropTypes from "prop-types";
import HeaderBar from "../../../components/common/headerBar/HeaderBar";

const QcumberWrapper = (props) => {
    return (
        <>
            <HeaderBar hasRightAlignedItems={true} />
            {props.children}
        </>
    );
};

QcumberWrapper.propTypes = {
    children: PropTypes.element.isRequired,
};

export default QcumberWrapper;
