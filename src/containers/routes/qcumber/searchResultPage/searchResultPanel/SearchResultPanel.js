import React, { Fragment } from 'react';
import classes from './SearchResultPanel.module.scss';
import { SEARCH_RESULTS_COMMON } from '../../../../../utilities/constants/constants';

const SearchResultPanel = (props) =>{

    return(
        // a section, wrapper it into a component later
        <Fragment>
        <div className={classes.resultSection}>
            {/*  the category header of the section */}
            <h3 className={classes.sectionHorizontalLine}>
                <span className={classes.sectionHeader}>{"Course"}</span>
            </h3>
            {/* results of the section */}
            {props.results.map((result, id) => {
                return(
                    <div key={id}>
                        <h4 className={classes.sectionTitle}>
                            {result[SEARCH_RESULTS_COMMON.SUBJECT_CODE] + " " + result[SEARCH_RESULTS_COMMON.NUMBER]}
                        </h4>
                        <p className={classes.sectionContent}>
                                {/* TODO: adding its constant and to right interface places */}
                                {result["course_details"]["course_description_short"]}
                        </p>
                    </div>
            )})}
        </div>
        </Fragment>
    )
}

export default SearchResultPanel;