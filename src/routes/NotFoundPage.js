import React from "react"
import {withRouter} from "react-router-dom";

class NotFoundPage extends React.Component{
    render() {
        return(
            <React.Fragment>
                <div>
                    404 Not Found Page
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(NotFoundPage)