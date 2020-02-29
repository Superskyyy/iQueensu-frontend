import React, { Fragment } from "react";
import classes from './SectionBlock.module.scss';
import { BlockEntity } from "./blockEntity/BlockEntity";

const SectionBlock = (props) => {
    // all seciton block lec/lab/tut
    return(
        <Fragment>
            <div className={classes.section}>
                <div id={"test"} className={classes.sectionTitle}>{props.title}</div>
                {props.section.map((sectionEntity,id) => {
                    return <BlockEntity key={id} timeBlockEntity={sectionEntity}/>
                })}
            </div>
        </Fragment>
    )
};

export default SectionBlock;