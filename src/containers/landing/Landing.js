import React from "react"
import {NavLink} from "react-router-dom";

class Landing extends React.Component{
    render() {
        return(
            <React.Fragment>

                <header>
                    IQueensu
                </header>
                <section>
                    <NavLink to={"/qhousing" }>Qhousing</NavLink><br/>
                    <NavLink to={"/qucumber" }>Qucumber</NavLink>
                </section>
            </React.Fragment>
        );
    }
}

export default Landing
