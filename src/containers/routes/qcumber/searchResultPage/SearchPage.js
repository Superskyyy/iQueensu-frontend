import React, {Component} from 'react';
import CustomSearch from '../../../../components/common/customSearch/CustomSearch';
import classes from './SearchPage.module.scss';
import FilterPanel from '../../../../components/common/filterPanel/FilterPanel';

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
        };
    }

    handleSearchResult = (res) => {
        res.json().then(result => {
            this.setState({
                // searchResults: result 

                //  temp
                searchResults: result.meals
            });
        })
    }

    // TODO: the layout of this page is basically the same as courseWrapper's, optimize it.
    render(){
        return(
            <div  className={classes.coursePageDashBoard}>
            {/* <Fragment> */}
                <div className={classes.coursePageLeftPart}>

                </div>      

                {/* give a fixed length is better, same as course details page */}
                <div className={classes.coursePageCenterPart}>
                    <CustomSearch
                        successHandler = {this.handleSearchResult}    
                    /> 

                    {/* filter panel */}
                    <FilterPanel

                     />

                    {/* <ResultPanel /> */}
                    {/* 想着怎么把这个result panel给抽出来 */}
                    {this.state.searchResults.length > 0 ? (
                        <div className={classes.resultPanel}>
                        {this.state.searchResults.map((meal, index) =>
                            <div key={index}>
                            {/* <h1>{meal.subject_name}</h1> */}

                            {/* temp */}
                            <h1>{meal.strMeal}</h1>
                            
                            </div>
                        )
                        }
                        </div>
                        ) : (
                        <p>Try searching for sth that has results</p>
                        )}
                </div>

                <div className={classes.coursePageRightPart}>
                    
                </div> 
            {/* </Fragment> */}
        </div>
        )   
    }
}

export default SearchPage;