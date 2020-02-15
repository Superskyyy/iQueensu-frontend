import React from 'react';
import classes from './SearchResultPanel.module.scss';
import { SEARCH_RESULTS_COMMON } from '../../../../../utilities/constants/constants';

const SearchResultPanel = (props) =>{

    return(
        // a section
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
                                {result[SEARCH_RESULTS_COMMON.SHORT_DESCRIPTION]}
                        </p>
                    </div>
            )})}
        </div>
    )
}

export default SearchResultPanel;