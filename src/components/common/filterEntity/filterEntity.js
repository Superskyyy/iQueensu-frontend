import React, { Fragment } from 'react';
import { FILTERS_COMMON } from '../../../utilities/constants/constants';
import classes from './filterEntity.module.scss';
import CheckBox from '../checkBox/CheckBox';

const FilterEntity = (props) => {

    const getOptions = (choicesType) => {
        if (choicesType.hasOwnProperty([FILTERS_COMMON.CHECKBOX])){
            console.log('these are check box options');
            return(
                choicesType[FILTERS_COMMON.CHECKBOX].map(choice =>{
                    return(
                        <CheckBox choice={choice}/>
                    );
                })
            );
        }
        else if (choicesType.hasOwnProperty([FILTERS_COMMON.RANGESLIDER])){
            console.log('this is a range slider');
            let choices = choicesType[FILTERS_COMMON.RANGESLIDER];
            // return(
            //     <RangeSlider 
            //         // using index is okay but not the best way 
            //         minValue={choices[0]} 
            //         maxValue={choices[1]}/>
            // )
        }

        return(
            null
        )
    };

    return(
        <Fragment>
            <div className={classes.wrapperClassName}>
                <span className={classes.fieldName}>{props.entity[FILTERS_COMMON.FIELD]}</span>
                <div className={classes.optionsPart}> 
                    {getOptions(props.entity[FILTERS_COMMON.CHOICES])}
                </div>  
            </div>
        </Fragment>
    )
}

export default FilterEntity;