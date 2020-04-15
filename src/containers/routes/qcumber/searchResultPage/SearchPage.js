import React, {Component, Fragment} from 'react';
import CustomSearch from '../../../../components/common/customSearch/CustomSearch';
import classes from './SearchPage.module.scss';
import FilterPanel from '../../../../components/common/filterPanel/FilterPanel';
import {filterOptions} from './filterData';
import SearchResultPanel from './searchResultPanel/SearchResultPanel';
import { FILTERS_COMMON } from '../../../../utilities/constants/constants';
import _ from 'lodash';
import { fetchSearchResult } from '../../../../utilities/SearchActions/fetchSearchResult';

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [
                // you can uncomment this mock obj if your not having ur server side up while developing
            //     {
            //     "url": "/test/",
            //     "id": 87,
            //     "number": "821",
            //     "subject_code": "AGHE",
            //     "short_description": "This is a mock description1",

            //     // tmp 
            //     "diffculty_level": "Medium",
            // },{
            //     "url": "/test/",
            //     "id": 88,
            //     "number": "926",
            //     "subject_code": "ELEC",
            //     "short_description": "This is a mock description2",

            //     // tmp 
            //     "diffculty_level": "Hard",
            // },{
            //     "url": "/mock/",
            //     "id": 89,
            //     "number": "326",
            //     "subject_code": "COMP",
            //     "short_description": "This is a mock description3",

            //     // tmp 
            //     "diffculty_level": "Easy",
            // },
            // {
            //     "url": "/mock/",
            //     "id": 90,
            //     "number": "345",
            //     "subject_code": "COMP",
            //     "short_description": "This is a mock description4",

            //     // tmp 
            //     "diffculty_level": "Medium",
            // },
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

        // get the querm and put it here 
        //fetchSearchResult("ANAT", "", this.handleSearchResult);

        this.setState({
            filterLogics: tmp
        })
    }

    handleSearchResult = (res) => {
        // TODO: add an intermediate interface
        res.json().then(result => {
            this.setState({
                searchResults: result 
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

                // TODO: use the helper method in course reducers remove the unchecked one 
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
        var filteredResults = this.state.searchResults;

        for(let property in logics){
            let tmp = []
            // union the same property
            if(logics[property].length > 0){
                for(let logicIndex in logics[property]){
                    tmp = tmp.concat(this.filter(logics[property][logicIndex], filteredResults, property));
                }
                // intersect different properties
                filteredResults = _.intersectionBy(tmp, filteredResults, 'uuid');
            }
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

    strOp = (str) => {
        return str
          .toString()
          .replace(/\s/g, '')
          .toLowerCase();
      }
      
    objectValues = (object, logic) => {
        return this.traverse(object, logic);
    }
    
    traverse = (o, logic) => {
        var res = null
        for (var i in o) {
            if (i === logic){
                res = this.strOp(o[i])
                return res
            }
            if (o[i] !== null && typeof(o[i])=="object") {
                //going one step down in the object tree!!
                return this.traverse(o[i], logic);
            }
        }
    }
      
    filter = (val, data, logic) => {
        return data.filter(el => {
            return !!val.length ? this.objectValues(el,logic) === (this.strOp(val)) : true;
        });
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