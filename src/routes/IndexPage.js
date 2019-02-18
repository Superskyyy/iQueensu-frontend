import React from "react"
import {NavLink, withRouter} from "react-router-dom";

class IndexPage extends React.Component{
    render() {
        return(
            <React.Fragment>
                <header>
                    IQueensu
                </header>
                <section>
                    <NavLink to={"/qhousing" }>Qhousing</NavLink>
                </section>
            </React.Fragment>
        );
    }
}

export default withRouter(IndexPage)