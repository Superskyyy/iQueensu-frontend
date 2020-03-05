import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class dataCourseLoad extends Component {
    constructor(){
        super();
        this.state = {
            workLoad: '',
        };
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/v1/qcumber/courses/993f56c2-8fc3-4982-8cd5-3c6112a5631e/')
        .then(results => {
            return results.json();
        }).then(data => {
            let workLoad = data.results.map((workLoad) => {
                return(
                    <div key={workLoad.course_details}>
                        <p value={workLoad.course_details.learning_hours}></p>
                    </div>
                )
            })
            this.setState({workLoad:workLoad});
            console.log("state", this.state.workLoad);
        })
    }

    render(){
        return(

        <div>
            {this.state.workLoad}}
        </div>
        
        );
    }
}