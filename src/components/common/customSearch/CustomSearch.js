import React, {Component} from 'react';
import classes from './CustomSearch.module.scss';
import iconSearch from '../../../assets/images/Qcumber/icons-search.svg';
import { withRouter } from 'react-router-dom';
import { URL_PATHS } from '../../../utilities/constants/constants';
import { fetchSearchResult } from '../../../utilities/SearchActions/fetchSearchResult';

class CustomSearch extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            searchTerm: '',
            results:[],
        };
    }

    handleInputChange = (event) => {
        let inputChange = event.target.value;
        // console.log(inputChange === '');
        this.setState({
            inputValue: inputChange
        })
        
        return inputChange;
    }

    onSubmit = (event) => {

        if(event){
            event.preventDefault();
        }
        // this.setState({
        //     searchTerm: this.state.inputValue
        // })
        
        if(this.props.history.location.pathname !== URL_PATHS.DATABASESEARCHPATH){
            // using querySet to store the search keyword
            this.props.history.push(URL_PATHS.DATABASESEARCHPATH);
        }else{
            this.makeApiCall(this.state.inputValue);
        }
    }
    handleSearchResult = (res) => {
        res.json().then(result => {
            this.setState({
                results: result
            });
        })
    }
    
    makeApiCall = (searchInput, additionalFilter="") => {
        // additionalFilter format: "&number=...&subjectname=..."
        // let mockFilter= {
        //     [COURSEFILTER.NUMBER]: 888,
            
        // }

        fetchSearchResult(searchInput, additionalFilter, this.handleSearchResult);
        
    };


    render() {
        return(
                <div>
                    <form className={classes.Form} onSubmit={this.onSubmit}>
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
                    {this.state.results ? (
                        <div className={classes.resultPanel}>
                        {this.state.results.map((meal, index) => (
                        <div key={index}>
                        <h1>{meal.subject_name}</h1>
                        {/* <img src={meal.strMealThumb} style={{width:'100px'}} alt="meal-thumbnail" /> */}
                        </div>
                        ))}
                        </div>
                        ) : (
                        <p>Try searching for sth that has results</p>
                        )}

                </div>
        )
    }
}

export default withRouter(CustomSearch);