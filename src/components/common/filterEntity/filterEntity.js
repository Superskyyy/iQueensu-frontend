import React, { Fragment } from "react";
import { FILTERS_COMMON } from "../../../utilities/constants/constants";
import classes from "./filterEntity.module.scss";
import CheckBox from "../checkBox/CheckBox";

const FilterEntity = (props) => {
    const getOptions = (choicesType) => {
        if (choicesType[FILTERS_COMMON.CHOICES].hasOwnProperty([FILTERS_COMMON.CHECKBOX])) {
            return choicesType[FILTERS_COMMON.CHOICES][FILTERS_COMMON.CHECKBOX].map((choice, id) => {
                return (
                    <CheckBox
                        key={id}
                        onClick={props.checkboxFilterMethod}
                        field={choicesType[FILTERS_COMMON.FIELD]}
                        choice={choice}
                    />
                );
            });
        } else if (choicesType[FILTERS_COMMON.CHOICES].hasOwnProperty([FILTERS_COMMON.RANGE_SLIDER])) {
            console.log("this is a range slider");
            //let choices = choicesType[FILTERS_COMMON.CHOICES][FILTERS_COMMON.RANGE_SLIDER];
            // return(
            //     <RangeSlider
            //         // using index is okay but not the best way
            //         minValue={choices[0]}
            //         maxValue={choices[1]}/>
            // )
        }

        return null;
    };

    return (
        <Fragment>
            <div className={classes.wrapperClassName}>
                <span className={classes.fieldName}>{props.entity[FILTERS_COMMON.DISPLAY_NAME]}</span>
                <div className={classes.optionsPart}>{getOptions(props.entity)}</div>
            </div>
        </Fragment>
    );
};

export default FilterEntity;
