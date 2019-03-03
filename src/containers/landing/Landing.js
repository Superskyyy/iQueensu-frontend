import React from "react"
import {NavLink} from "react-router-dom";

class Landing extends React.Component{
    render() {
        const intlTest = "test";
        return(
            <React.Fragment>

                <header>
                    IQueensu
                </header>
                <section>
                    <NavLink to={"/qhousing" }>Qhousing</NavLink><br/>
                    <NavLink to={"/qucumber" }>Qucumber</NavLink>
                </section>
                <h1>{intlTest}</h1>
            </React.Fragment>
        );
    }
}

export default Landing
