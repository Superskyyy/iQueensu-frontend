import React, {Component} from 'react';
import CustomSearch from '../../../../components/widgets/CustomSearch/CustomSearch';
import classes from './SearchPage.module.scss';

class SearchPage extends Component {

    // TODO: the layout of this page is basically the same as courseWrapper's, optimize it.
    render(){
        return(
            <div  className={classes.coursePageDashBoard}>
            {/* <Fragment> */}
                <div className={classes.coursePageLeftPart}>

                </div>      

                <div className={classes.coursePageCenterPart}>
                    <CustomSearch /> 
                </div>

                <div className={classes.coursePageRightPart}>
                    
                </div> 
            {/* </Fragment> */}
        </div>
        )   
    }
}

export default SearchPage;