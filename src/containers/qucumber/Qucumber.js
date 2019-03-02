import React from "react"
import {NavLink} from "react-router-dom";

class Qucumber extends React.Component{
    render() {
        return(
            <React.Fragment>
                <header>
                    Qucumber
                </header>
                <section>
                    <NavLink to={"/"}>Back to Home Page</NavLink>
                </section>
            </React.Fragment>
        );
    }
}

export default Qucumber
