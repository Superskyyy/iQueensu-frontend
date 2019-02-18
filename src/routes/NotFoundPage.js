import React from "react"
import {withRouter} from "react-router-dom";

class NotFoundPage extends React.Component{
    render() {
        return(
            <React.Fragment>
                <div>
                    Not Found Page
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(NotFoundPage)