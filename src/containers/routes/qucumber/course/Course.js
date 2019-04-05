import React,{Component, Fragment} from "react"
import {withRouter} from "react-router-dom";
import Dashboard from "./Dashboard";



class Course extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: ""
        }
    }

    render() {
        return(
            <Fragment>
                <div>
                    {}
                </div>
                <Dashboard />
                <div>
                    {}
                </div>
            </Fragment>
        );
    }
}

export default withRouter(Course)
