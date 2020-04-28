import React, { Component } from "react";
import { Portal } from "react-portal";
import PropTypes from "prop-types";

class ModalPanel extends Component {
    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <>
                <Portal>
                    <div class={`modal-backdrop ${this.props.show ? "show" : ""}`} />
                </Portal>
                {this.props.children}
            </>
        );
    }
}

ModalPanel.propTypes = {
    show: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired,
};

export default ModalPanel;
