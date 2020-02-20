import React, {useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from './BlockEntity.module.scss';
import { removeTimeBlock, addTimeBlock } from "../../../../../../../store/actions/courseActions";
import redSign from '../../../../../../../assets/images/Qcumber/banMark.svg';
import greySign from '../../../../../../../assets/images/Qcumber/icons-plus.svg';

// TODO: green sign is wrong for now

export const BlockEntity = (props) => {
    //for particular 001/002 entity

    const registeredTimeTable = useSelector(state => state.courses.registeredTimeTable);
    const dispatch = useDispatch();
    const [flip, setFlip] = useState(false);
    const acronym = props.timeBlockEntity['type'] === 'lecture' ? ' LEC' : props.timeBlockEntity['type'] === 'lab' ? ' LAB' : ' TUT';

    return (<Fragment>
                <div className={classes.section} tabIndex={0}>
                    <div className={classes.sectionTitleBar}>
                        <div className={`${classes.sectionFrontPart} ${classes.frontPartPadding}`}>
                            <div style={{width: '88px'}}>
                                <span className={classes.sectionName}>{props.timeBlockEntity['name']} {acronym}</span>
                                <br />
                                <span className={classes.sectionSubName}>{props.timeBlockEntity['id']}</span>
                            </div>
                            <div className={`${classes.status} ${classes[props.timeBlockEntity['status']]}`}/>
                        </div>

                        <button className={`${classes.sectionBackPart} ${classes.backPartPadding}`}
                            style={flip ? {backgroundColor:'#f7e8e8', color: '#ad2121'} : {backgroundColor: '#fbfbfb'}}
                            onClick={() => {
                                if(flip){
                                    dispatch(removeTimeBlock(props.timeBlockEntity));
                                    setFlip(false);
                                }else{  
                                    dispatch(addTimeBlock(props.timeBlockEntity))
                                    //console.log(registeredTimeTable.length)
                                    setFlip(true);
                                }}}>
                            <img src={flip ? redSign : greySign} alt="plusOrMinus"/>
                            {flip ? "Remove from Planner" : "Select"}
                        </button>
                    </div>

                    <table className={classes.sectionTable}>
                        <tbody>
                        {props.timeBlockEntity['schedule'].map((scheduleEntity, id) =>{
                            return <tr key={id} className={classes.sectionTableRow}>
                                        <td style={{paddingLeft:'18px'}} className={classes.sectionTableCell}>{scheduleEntity['weekday']}</td>
                                        <td className={classes.sectionTableCell}>{scheduleEntity['time']}</td>
                                        <td className={classes.sectionTableCell}>{props.timeBlockEntity['location']}</td>
                                        <td className={classes.sectionTableCell}>
                                            <a href="https://google.com">
                                                {props.timeBlockEntity['professor']}
                                            </a>
                                        </td>
                                        <td style={{paddingLeft:'60px', width:'210px'}} className={classes.sectionTableCell}>{props.timeBlockEntity['duration']}</td>
                                    </tr>
                        })}
                        </tbody>
                    </table>
                </div>
            </Fragment>
    )
}