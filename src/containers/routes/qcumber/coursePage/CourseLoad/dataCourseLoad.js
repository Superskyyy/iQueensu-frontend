import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class DataCourseLoad extends Component {
    constructor(){
        super();
        this.state = {
            workLoad: '',
            courseObject: undefined
        };
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/v1/qcumber/courses/c63f4fb7-b780-4c4b-8481-08709a3b7af0/')
        .then(results => {
            console.log(results)
            return results.json();
        }).then(data => {
            console.log("console.log1",data)
            this.setState({courseObject:data});
                    
        })
    }

    render(){
        console.log(typeof(this.state.courseObject)!=="undefined"? this.state.courseObject["course_details"]["learning_hours"]:undefined)
        return(
            <React.Fragment>
            <div key={typeof(this.state.courseObject)!=="undefined" ? this.state.courseObject ['course_details'] : undefined}>
                <p>{typeof(this.state.courseObject)!=="undefined"? this.state.courseObject["course_details"]["learning_hours"]:undefined}</p>
            </div>
            <div>
                {this.state.workLoad}
            </div>
            </React.Fragment>
        );
    }
}

export default DataCourseLoad