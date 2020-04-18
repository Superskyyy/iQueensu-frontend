import React, {Component} from 'react';
import classes from './CustomSearchModule.module.scss';
import iconSearch from '../../../assets/images/Qcumber/icons-search.svg';
import iconArrowDown from '../../../assets/images/Qcumber/icon-arrow-down.svg';
import iconArrowUp from '../../../assets/images/Qcumber/icon-arrow-up.svg';
import { withRouter } from 'react-router-dom';
import { URL_PATHS, FILTERS_COMMON } from '../../../utilities/constants/constants';
import { fetchSearchResult } from '../../../utilities/SearchActions/fetchSearchResult';
import FilterPanel from '../filterPanel/FilterPanel';
import { filterOptions } from '../../../containers/routes/qcumber/searchResultPage/filterData';
import SearchResultPanel from '../../../containers/routes/qcumber/searchResultPage/searchResultPanel/SearchResultPanel';
import _ from 'lodash';
import { filter } from '../../../utilities/ObjectHelper';

class CustomSearchModule extends Component{
    constructor(props) {
        super(props);
        // get query param
        var urlParams = new URLSearchParams(this.props.history.location.search);

        this.state = {
            inputValue: urlParams.has('course') ? urlParams.get('course') : '',
            isDropdownOpen: false,
            searchResults: [],
            filteredSearchResults: [],
            filterLogics: {},
            // avoid to see no items found when firsting landing the page, also when searching an empty string
            userHasSearched: false,
        };
    }

    componentDidMount(){
        if(this.state.inputValue !== ''){
            this.makeApiCall(this.state.inputValue);
        }

        let tmp = {};
        filterOptions.forEach(option =>{
            tmp[option[FILTERS_COMMON.FIELD]] = []
        })

        this.setState({
            filterLogics: tmp
        })
    }

    componentDidUpdate = (previousProps, previousState) =>{
        if((previousState.filterLogics !== this.state.filterLogics) || previousState.searchResults !== this.state.searchResults){
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
                    tmp = tmp.concat(filter(logics[property][logicIndex], filteredResults, property));
                }
                // intersect different properties
                filteredResults = _.intersectionBy(tmp, filteredResults, 'uuid');
            }
        }

        this.setState({
            filteredSearchResults: filteredResults
        })
    }

    handleInputChange = (event) => {
        let inputChange = event.target.value;
        this.setState({
            inputValue: inputChange
        })
    }

    onSubmit = (event) => {
        if(event){
            event.preventDefault();
        }

        if(this.state.inputValue !== ''){
            if(this.props.history.location.pathname !== URL_PATHS.DATABASE_SEARCH_PATH){
                this.props.history.push(URL_PATHS.DATABASE_SEARCH_PATH
                    + '?course='
                    + this.state.inputValue);
            }else{
                this.props.history.location.search = '?course='+this.state.inputValue;

                this.makeApiCall(this.state.inputValue);
            }
        }else{
            this.props.history.push(URL_PATHS.DATABASE_SEARCH_PATH);
            this.setState({
                userHasSearched: false
            });
        }
    }

    makeApiCall = (searchInput, additionalFilter="") => {
        // additionalFilter format: "&number=...&subjectname=..."

        fetchSearchResult(searchInput, additionalFilter, this.handleSearchResult);
    };

    handleSearchResult = (res) => {
        // TODO: add an intermediate interface
        res.json().then(result => {
            this.setState({
                searchResults: result 
            });
        })
        this.props.history.push(this.props.history.location.pathname+ this.props.history.location.search);
        this.setState({
            userHasSearched: true
        })
    }

    toggleDropdown = () =>{
        this.setState({
            isDropdownOpen: !this.state.isDropdownOpen
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

    render() {
        return(
            <div>
                <form className={classes.Form} onSubmit={this.onSubmit}>
                <div className={ this.state.isDropdownOpen ? `${classes.searchDropdown} ${classes.open}` : `${classes.searchDropdown}` }>
                    <button className={`${classes.button} ${classes.dropdownToggle}`} onClick={this.toggleDropdown} type="button">
                    <span className={classes.toggleActive}>Everything</span>
                    <img style={{marginLeft: '4px'}} src={this.state.isDropdownOpen ? iconArrowUp : iconArrowDown } alt={"dropdown"} />
                    </button>
                    {/* optimize dropdown */}
                    <ul className={classes.dropdownMenu}>
                    <li className={classes.menuActive}><a href="#">Everything</a></li>
                    <li><a href="#">People</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                    <img className={classes.Icon} src={iconSearch} alt={"search"}/>
                    <input className={classes.Search}  
                        value = {this.state.inputValue}
                        name={"text"}
                        id={"searchGlobal"} 
                        onChange={ e => this.handleInputChange(e)}
                        type={"text"} 
                        placeholder={"Anything..."} 
                        aria-label={"Search"} />
                </form>
                { this.props.history.location.pathname !== URL_PATHS.DATABASE_SEARCH_PATH ? null :
                <div>                            
                    <FilterPanel
                        filterMethod={this.modifyFilterLogics} 
                        filterOptions={filterOptions}/> 
                    {
                        // this.state.inputValue !== '' ?
                        <SearchResultPanel 
                            userHasSearched = {this.state.userHasSearched} 
                            results= {this.refreshDisplayedResults(this.state.filterLogics)}/>
                        // : <div>{'搜点啥把'}</div>
                    }

                </div>}
            </div>
        )
    }
}

export default withRouter(CustomSearchModule);