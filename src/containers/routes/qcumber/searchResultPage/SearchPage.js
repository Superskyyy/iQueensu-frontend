import React, {Component} from 'react';
import CustomSearch from '../../../../components/common/customSearch/CustomSearch';
import classes from './SearchPage.module.scss';
import FilterPanel from '../../../../components/common/filterPanel/FilterPanel';
import {filterOptions} from './filterData';
import SearchResultPanel from './searchResultPanel/SearchResultPanel';
import { FILTERS_COMMON } from '../../../../utilities/constants/constants';
import { element } from 'prop-types';

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [{
                "url": "/test/",
                "id": 87,
                "number": "821",
                "subject_code": "AGHE",
                "short_description": "This is a mock description1",

                // tmp 
                "diffculty_level": "Medium",
            },{
                "url": "/test1/",
                "id": 88,
                "number": "926",
                "subject_code": "ELEC",
                "short_description": "This is a mock description2",

                // tmp 
                "diffculty_level": "Hard",
            },{
                "url": "/test2/",
                "id": 89,
                "number": "326",
                "subject_code": "COMP",
                "short_description": "This is a mock description3",

                // tmp 
                "diffculty_level": "Easy",
            }],

            filteredSearchResults: [],
            filterLogics: {},
        };
    }
    componentDidMount = () =>{
        let tmp = {};
        filterOptions.forEach(option =>{
            tmp[option[FILTERS_COMMON.FIELD]] = []
        })
        this.setState({
            filterLogics: tmp
        })
    }

    handleSearchResult = (res) => {
        // TODO: add an intermediate interface
        res.json().then(result => {
            this.setState({
                // searchResults: result 

                //  temp
                searchResults: result.meals
            });
        })
    }

    modifyFilterLogics = (event) =>{
        let fieldAndValues = event.target.id;
        let checked = event.target.checked;

        let res = [fieldAndValues.substring(0, fieldAndValues.indexOf(" ")), fieldAndValues.substring(fieldAndValues.indexOf(" ") + 1)]

        if(res.length === 2){
            let field = res[0];
            let value = "";

            if (checked){
                value = res[1];
            }else {
                const index = this.state.filterLogics[field].indexOf(res[1]);
                if (index > -1) {
                    this.setState(prevState =>(prevState.filterLogics[field].splice(index, 1),{
                        ...prevState,
                        filterLogics: {
                            ...prevState.filterLogics,
                            [field]: prevState.filterLogics[field]
                        }
                }))
                }
                return ;
            }
            this.setState(prevState =>({
                ...prevState,
                filterLogics: {
                    ...prevState.filterLogics,
                    [field]: [...prevState.filterLogics[field], value]
                } 
            }))
            return ;
        }
        return ;
    } 
    componentDidUpdate = (previousProps, previousState) =>{
        // console.log(this.state.filterLogics)
        // console.log(previousState.filterLogics)
        // console.log(this.state.filterLogics)
        if(previousState.filterLogics !== this.state.filterLogics){
            console.log('imhre')
            this.handleFilterResult(this.state.filterLogics);
        }
    } 

    handleFilterResult = (logics) => {
        let filteredResults = [];

        for(var property in logics){
            console.log(property)
            console.log(logics[property].length)
            // AND properties, OR element in the same property
            if(logics[property].length > 0){ //diffculty_level.length = 2
                // A BETTER ALGORITHM TO FIGURE HOW TO DO OR / AND
            }

        }
        // console.log( filteredResults );

        this.setState({
            filteredSearchResults: filteredResults
        })
        return ;
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
                    <CustomSearch successHandler = {this.handleSearchResult}/> 

                    {/* filter panel */}
                    <FilterPanel 
                        filterMethod={this.modifyFilterLogics} 
                        filterOptions={filterOptions}/>

                    <SearchResultPanel  
                        results={ this.state.filteredSearchResults.length > 0 ?
                             this.state.filteredSearchResults : this.state.searchResults}
                        // results={this.handleFilterResult([{[FILTERS_COMMON.FIELD]: 'diffculty_level', value: ['medium', 'hard']}])}
                    />
                </div>

                <div className={classes.coursePageRightPart}>
                    
                </div> 
            {/* </Fragment> */}
        </div>
        )   
    }
}

export default SearchPage;