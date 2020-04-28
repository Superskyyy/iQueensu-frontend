import React from "react";
import ModalOpenButton from "./ModalOpenButton";
import ModalPanel from "./ModalPanel";

export default function modalPackUp(MoButton, buttonAttr, MContent, panelAttr) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isOpen: false,
            };
        }

        render() {
            return (
                <>
                    <ModalOpenButton
                        {...buttonAttr}
                        modalToggle={() => {
                            this.setState({ isOpen: true });
                        }}
                        children={MoButton}
                    >
                    </ModalOpenButton>
                    
                    <ModalPanel show={this.state.isOpen}>
                        <MContent
                            {...panelAttr}
                            handleClose={() => {
                                this.setState({ isOpen: false });
                            }}
                        />
                    </ModalPanel>
                </>
            );
        }
    };
}
