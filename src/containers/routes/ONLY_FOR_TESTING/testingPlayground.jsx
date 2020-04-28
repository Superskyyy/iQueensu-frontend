import React from "react";
import styles from "./testingPlayground.module.scss";
import CommentEditor from "../../../components/widgets/Comments/CommentEditor";
import modalPackUp from "../../../components/common/modal/ModalPackUp";

const TestingPlayground = () => {
    const Butt = (props) => {
        return <button {...props}>click to launch CommentEditor</button>;
    };
    const Modal = modalPackUp(Butt, {}, CommentEditor, {});

    return (
        <>
            {/* put your testing code here */}
            <Modal />
            <div className={"H1"}>Testing Page</div>
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
