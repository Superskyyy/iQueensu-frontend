import React, { useState } from "react";
import styles from "./testingPlayground.module.scss";
import CommentEditor from "../../../components/widgets/Comments/CommentEditor"

const TestingPlayground = (props) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            {/* put your testing code here */}
            <div className={"H1"}>
                Testing Page
            </div>
            <button onClick={()=>{
                setOpen(!isOpen)
            }}>click to launch CommentEditor</button>
            <CommentEditor show={isOpen} onClose={()=>{setOpen(!isOpen)}}/>

            <div className={""}>
                <p className={styles.green_050}>
                    <p className="H5">green—050</p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum nisi, dolore nihil, maiores animi
                    recusandae doloribus, eum quia voluptates vel error non fugit. Quos quaerat nesciunt saepe, aliquid
                    eos cupiditate?
                </p>
                <p className={styles.green_100}>
                    <p className="H5">green—100</p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum nisi, dolore nihil, maiores animi
                    recusandae doloribus, eum quia voluptates vel error non fugit. Quos quaerat nesciunt saepe, aliquid
                    eos cupiditate?
                </p>
                <p className={styles.green_200}>
                    <p className="H5">green—200</p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum nisi, dolore nihil, maiores animi
                    recusandae doloribus, eum quia voluptates vel error non fugit. Quos quaerat nesciunt saepe, aliquid
                    eos cupiditate?
                </p>
                <p className={styles.green_300}>
                    <p className="H5">green—300</p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum nisi, dolore nihil, maiores animi
                    recusandae doloribus, eum quia voluptates vel error non fugit. Quos quaerat nesciunt saepe, aliquid
                    eos cupiditate?
                </p>
                <p className={styles.green_400}>
                    <p className="H5">green—400</p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum nisi, dolore nihil, maiores animi
                    recusandae doloribus, eum quia voluptates vel error non fugit. Quos quaerat nesciunt saepe, aliquid
                    eos cupiditate?
                </p>
                <p className={styles.green_500}>
                    <p className="H5">green—500</p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum nisi, dolore nihil, maiores animi
                    recusandae doloribus, eum quia voluptates vel error non fugit. Quos quaerat nesciunt saepe, aliquid
                    eos cupiditate?
                </p>
                <p className={styles.green_600}>
                    <p className="H5">green—600</p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum nisi, dolore nihil, maiores animi
                    recusandae doloribus, eum quia voluptates vel error non fugit. Quos quaerat nesciunt saepe, aliquid
                    eos cupiditate?
                </p>
                <p className={styles.green_700}>
                    <p className="H5">green—700</p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum nisi, dolore nihil, maiores animi
                    recusandae doloribus, eum quia voluptates vel error non fugit. Quos quaerat nesciunt saepe, aliquid
                    eos cupiditate?
                </p>
                <p className={styles.green_800}>
                    <p className="H5">green—800</p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum nisi, dolore nihil, maiores animi
                    recusandae doloribus, eum quia voluptates vel error non fugit. Quos quaerat nesciunt saepe, aliquid
                    eos cupiditate?
                </p>
                <p className={styles.green_900}>
                    <p className="H5">green—900</p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum nisi, dolore nihil, maiores animi
                    recusandae doloribus, eum quia voluptates vel error non fugit. Quos quaerat nesciunt saepe, aliquid
                    eos cupiditate?
                </p>
            </div>
        </>
    );
};

export default TestingPlayground;
