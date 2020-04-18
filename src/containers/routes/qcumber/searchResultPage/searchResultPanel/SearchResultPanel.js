import React, { Fragment } from 'react';
import classes from './SearchResultPanel.module.scss';
import { SEARCH_RESULTS_COMMON } from '../../../../../utilities/constants/constants';

const SearchResultPanel = (props) =>{

    return(
        // a section, wrapper it into a component later
        <Fragment>
        <div className={classes.resultSection}>
            {   // first to check whether or not user is the first time landing on the page
                props.userHasSearched ? 
                    // to see if the received results are empty or not
                    props.results.length > 0 ?
                        <div>
                            {/* course section can be generalized into a HOC or a component */}
                            <h3 className={classes.sectionHorizontalLine}><span className={classes.sectionHeader}>{"Course"}</span></h3>
                            {props.results.map((result, id) => {
                                return(
                                    <div key={id}>
                                        <h4 className={classes.sectionTitle}>
                                            {result[SEARCH_RESULTS_COMMON.SUBJECT_CODE] + " " + result[SEARCH_RESULTS_COMMON.NUMBER]}
                                        </h4>
                                        <p className={classes.sectionContent}>
                                                {result["course_details"]["course_description_short"]}
                                        </p>

                                        <div className={classes.Labelstyle}>
                                            <div className={classes.Label}><span style={{fontWeight: 600}}>Units &nbsp;</span> {result["course_details"]["units"]}</div>
                                            <div className={classes.Label}><span style={{fontWeight: 600}}>Career &nbsp;</span>  {result["course_details"]["career"]}</div>
                                            <div className={classes.Label}><span style={{fontWeight: 600}}>Grading &nbsp;</span>  {result["course_details"]["grading"]}</div>
                                        </div>
                                    </div>
                            )})}
                        </div>
                        // result is empty
                        : <div>{'没搜着啥'}</div>
                    // user is first time landing on the page, or searching an empty string
                    : <div>{'搜点啥把'}</div>
            }
            
        </div>
        </Fragment>
    )
}

export default SearchResultPanel;