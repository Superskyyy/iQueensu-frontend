import React from "react";
import ModalContent from "../../common/modal/ModalContent"
class CommentEditor extends ModalContent {
    render() {
        return (
            <>
                <div id="commentModal" class="modal" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <button class="close" type="button" onClick={this.props.handleClose}>
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CommentEditor;
