import React, {Component} from 'react';

class dataCourseLoad extends Component {
    constructor(){
        super();
        this.state = {
            workLoad:[],
    };
}

componentDidMount(){
    fetch('http://127.0.0.1:8000/api/v1/qcumber/courses/993f56c2-8fc3-4982-8cd5-3c6112a5631e/')
    .then(results => {
        return results.json();
    }).then(data => {
        let workLoad = data.results.map((learning_hours) =>{
            return(
                <div key={learning_hours.results}>
                    <p />
                </div>
            )
        })
        this.ListeningStateChangedEvent({workLoad:workLoad});
        console.log("state", this.state.workLoad);
    })
}


render(){
    return(
        <div className="container2">
            <div className="container1">
                {this.state.workLoad}
            </div>
        </div>
    )
}
}

