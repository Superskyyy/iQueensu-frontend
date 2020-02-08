import React, {Component} from 'react';
import {colourOptions} from './Options/CourseOptions';
import classes from './CustomSearch.module.scss';
import iconSearch from '../../../assets/images/Qcumber/icons-search.svg';
import { withRouter } from 'react-router-dom';
import { URL_PATHS } from '../../../utilities/constants/constants';

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

    mockFilter = (input) =>{
        console.log("mock: " + input);
        //return colourOptions;

        return colourOptions.filter(i =>
            i.label.includes(input)
          );
    }

    componentDidMount(){
        console.log(this.props.history);
    }

    mockLoad = (input, callback) =>{
        setTimeout(()=>{
            callback(this.mockFilter(input));
        }, 1000);
    }

    // handleKey = (event) => {
    //     console.log(event)
    // }

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

    makeApiCall = searchInput => {
        var searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
        fetch(searchUrl)
            .then(response => {
                return response.json();
            })
            .then(jsonData => {
                console.log(jsonData.meals);
                this.setState({ results: jsonData.meals });
            });
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
                        <h1>{meal.strMeal}</h1>
                        <img src={meal.strMealThumb} style={{width:'100px'}} alt="meal-thumbnail" />
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