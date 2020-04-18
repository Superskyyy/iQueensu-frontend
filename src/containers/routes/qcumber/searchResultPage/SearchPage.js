import React, {Component, Fragment} from 'react';
import CustomSearchModule from '../../../../components/common/customSearchModule/CustomSearchModule';
import classes from './SearchPage.module.scss';
import { withRouter } from 'react-router-dom';

class SearchPage extends Component {
    constructor(props) {
        super(props);
    }

    // TODO: the layout of this page is basically the same as courseWrapper's, optimize it.
    render(){
        return(
            <div  className={classes.coursePageDashBoard}>
            <Fragment>
                <div className={classes.coursePageLeftPart}>

                </div>      

                {/* give a fixed length is better, same as course details page */}
                <div className={classes.coursePageCenterPart}>
                    <CustomSearchModule/> 
                </div>

                <div className={classes.coursePageRightPart}>
                    
                </div> 
            </Fragment>
        </div>
        )   
    }
}

export default withRouter(SearchPage);