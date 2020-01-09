import React,{Component, Fragment} from "react"
import {withRouter} from "react-router-dom";
import Dashboard from "./Dashboard";



class Course extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: "",
        }
    }
    // componentDidMount(){
    //     console.log(this.props.current)
    // }

    render() {
        console.log(this.props.courseObj)
        return(
            <Fragment>
                <div className={"test"}>
                    {this.props.courseObj === undefined ? null : this.props.courseObj["default"]["units"]}
                </div>
                <Dashboard />
                <div>
                    {}
                </div>
            </Fragment>
        );
    }
}

export default withRouter((Course))
