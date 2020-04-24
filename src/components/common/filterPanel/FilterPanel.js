import React, { Fragment, PureComponent } from 'react';
import classes from './FilterPanel.module.scss';
import FilterEntity from '../filterEntity/filterEntity';

class FilterPanel extends PureComponent{


    render(){
        return(
            <Fragment >
                <div className={classes.filterPanel}>
                    {this.props.filterOptions.map((option,id) =>{
                        return(
                            <FilterEntity
                                checkboxFilterMethod = {this.props.filterMethod} 
                                key={id} 
                                entity={option}
                            />)
                    })}
                </div>
            </Fragment>
        )
    }
}

export default FilterPanel;