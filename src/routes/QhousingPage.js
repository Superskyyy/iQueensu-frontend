import React from "react"
import {withRouter} from "react-router-dom";
import Qhousing from "../containers/qhousing/Qhousing";

class QhousingPage extends React.Component{
    render() {
        return(
            <React.Fragment>
                <Qhousing/>
            </React.Fragment>
        );
    }
}

export default withRouter(QhousingPage)