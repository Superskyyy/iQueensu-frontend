import React from "react"
import {NavLink} from "react-router-dom";
import {changeIcon} from "../../utils/domController";

class Qucumber extends React.Component{
    render() {
        return(
            <React.Fragment>
                <header>
                    Qucumber
                </header>
                <section>
                    <NavLink to={"/"}>Back to Home Page</NavLink><br/>
                    <NavLink to={"/database"}><div onClick={changeIcon("%PUBLIC_URL%/qucumber_16.ico")}>Go to Database</div></NavLink>
                </section>
            </React.Fragment>
        );
    }
}

export default Qucumber
