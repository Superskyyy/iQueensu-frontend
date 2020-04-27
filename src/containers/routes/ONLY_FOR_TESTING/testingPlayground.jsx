import React, { useState } from "react";
import styles from "./testingPlayground.module.scss";
import CommentEditor from "../../../components/widgets/Comments/CommentEditor";
import bindModal from "../../../components/HOC/ModalHOC";

const TestingPlayground = (props) => {
    const [isOpen, setOpen] = useState(false);
    
    return (
        <>
            {/* put your testing code here */}
            <div className={"H1"}>Testing Page</div>
            <button
                onClick={() => {
                    setOpen(!isOpen);
                }}
            >
                click to launch CommentEditor
            </button>
            <CommentEditor
                show={isOpen}
                onClose={() => {
                    setOpen(!isOpen);
                }}
            />
            <div className={""}>
                <div className={styles.green_050}>
                    <p className="H5">green—050</p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum nisi, dolore nihil, maiores animi
                    recusandae doloribus, eum quia voluptates vel error non fugit. Quos quaerat nesciunt saepe, aliquid
                    eos cupiditate?
                </div>
            </div>
        </>
    );
};

export default TestingPlayground;
