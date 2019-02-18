import React from "react"
import CampusMap from "./CampusMap";
import {NavLink} from "react-router-dom";

class Qhousing extends React.Component {
    render() {
        return(
            <React.Fragment>
                <header>
                    Qhousing
                </header>
                <section>
                    <NavLink to={"/"}>Back to Home Page</NavLink>
                </section>
                <section>
                    <CampusMap/>
                </section>
            </React.Fragment>
        );
    }
}

export default Qhousing