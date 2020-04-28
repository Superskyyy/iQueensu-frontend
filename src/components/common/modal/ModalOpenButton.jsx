import React, { Component } from "react";
import PropTypes from "prop-types";

class ModalOpenButton extends Component {
    render() {
        const { modalToggle, onClick, children, ...rest } = this.props;
        const Children = children;

        const handleClick = () => {
            modalToggle();
            onClick && onClick();
        };

        return <Children onClick={handleClick} {...rest} />;
    }
}

ModalOpenButton.propTypes = {
    modalToggle: PropTypes.func.isRequired,
};

export default ModalOpenButton;
