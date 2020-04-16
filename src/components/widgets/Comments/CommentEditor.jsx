import React, { Component } from "react";
import { Portal } from "react-portal";
import PropTypes from "prop-types";
class CommentEditor extends Component {
    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <>
                <Portal>
                    <div class={`modal-backdrop ${this.props.show ? "show" : ""}`}/>
                </Portal>
                <div id="commentModal" class="modal" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <button class="close" type="button" onClick={this.props.onClose}>
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

CommentEditor.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
};

export default CommentEditor;
