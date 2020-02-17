import React, {Component, Fragment} from 'react';
import CustomSearch from '../../../../components/common/customSearch/CustomSearch';
import classes from './SearchPage.module.scss';
import FilterPanel from '../../../../components/common/filterPanel/FilterPanel';
import {filterOptions} from './filterData';
import SearchResultPanel from './searchResultPanel/SearchResultPanel';
import { FILTERS_COMMON } from '../../../../utilities/constants/constants';
import _ from 'lodash';

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
                "url": "/test/",
                "id": 88,
                "number": "926",
                "subject_code": "ELEC",
                "short_description": "This is a mock description2",

                // tmp 
                "diffculty_level": "Hard",
            },{
                "url": "/mock/",
                "id": 89,
                "number": "326",
                "subject_code": "COMP",
                "short_description": "This is a mock description3",

                // tmp 
                "diffculty_level": "Easy",
            },
            {
                "url": "/mock/",
                "id": 90,
                "number": "345",
                "subject_code": "COMP",
                "short_description": "This is a mock description4",

                // tmp 
                "diffculty_level": "Medium",
            },
        ],

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
                    this.setState(prevState =>((prevState.filterLogics[field].splice(index, 1),{
                        ...prevState,
                        filterLogics: {
                            ...prevState.filterLogics,
                            [field]: prevState.filterLogics[field]
                        }
                })))}
                return ;
            }
            this.setState(prevState =>({
                ...prevState,
                filterLogics: {
                    ...prevState.filterLogics,
                    [field]: [...prevState.filterLogics[field], value]
                } 
            }))
        }
        return ;
    } 
    componentDidUpdate = (previousProps, previousState) =>{
        if(previousState.filterLogics !== this.state.filterLogics){
            this.handleFilterResult(this.state.filterLogics);
        }
    } 

    handleFilterResult = (logics) => {
        var filteredResults = [];

        for(let property in logics){
            if(filteredResults.length === 0){
                // Intersection properties, Union element in the same property, using lodash lib
                if(logics[property].length > 0){
                    for(let logicIndex in logics[property]){
                        let tmp = this.state.searchResults.filter(entity =>
                            entity[property] === logics[property][logicIndex]
                        )
                        filteredResults = filteredResults.concat(tmp);
                    }
            }}
            else{
                if(logics[property].length > 0){
                    let tmp = [];
                    for(let logicIndex in logics[property]){
                        let tmpArr = filteredResults.filter(entity =>
                            entity[property] === logics[property][logicIndex]    
                        )
                        tmp = tmp.concat(tmpArr);
                    }
                    filteredResults = _.intersectionBy(tmp, filteredResults, 'id');
            }}
        }
        this.setState({
            filteredSearchResults: filteredResults
        })
    }

    refreshDisplayedResults = (logics) =>{
        let displayed = false; 

        for (let logicIndex in logics){
            if (logics[logicIndex] && logics[logicIndex].length > 0){
                displayed=true;
                break;
            }
        }

        return displayed ? this.state.filteredSearchResults : this.state.searchResults;
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
                    <CustomSearch successHandler = {this.handleSearchResult}/> 

                    {/* filter panel */}
                    <FilterPanel 
                        filterMethod={this.modifyFilterLogics} 
                        filterOptions={filterOptions}/>

                    <SearchResultPanel  
                        results= {this.refreshDisplayedResults(this.state.filterLogics)}
                    />
                </div>

                <div className={classes.coursePageRightPart}>
                    
                </div> 
            </Fragment>
        </div>
        )   
    }
}

export default SearchPage;