import React, { Component, Fragment } from 'react';
import classes from './FilterPanel.module.scss';
import FilterEntity from '../filterEntity/filterEntity';
import {filterOptions} from '../../../containers/routes/qcumber/searchResultPage/filterData';
import { FILTERS_COMMON } from '../../../utilities/constants/constants';

class FilterPanel extends Component{


    render(){
        return(
            <Fragment >
                <div className={classes.resultPanel}>
                    {filterOptions.map((option,id) =>{
                        return(
                            <FilterEntity 
                                key={id} 
                                entity={option}
                                />
                        )
                    })}
                </div>
            </Fragment>
        )
    }
}

export default FilterPanel;