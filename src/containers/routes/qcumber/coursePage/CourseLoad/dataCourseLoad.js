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
        fetch('http://127.0.0.1:8000/api/v1/qcumber/courses/993f56c2-8fc3-4982-8cd5-3c6112a5631e/')
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