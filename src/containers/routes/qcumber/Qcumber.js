// Packages
import React                 from "react";
import {NavLink, withRouter} from "react-router-dom";
//
import {qcumber}            from "../../../assets/exportImages";
import XHelmet               from "../../../components/accessoriesDeprecated/XHelmet";
import { URL_PATHS } from "../../../utilities/constants/constants";

class Qcumber extends React.Component {
    render() {
        return (
            <React.Fragment>
                <XHelmet title={"Qcumber"} favicon={qcumber}/>
                <header>
                    Qcumber
                </header>
                <section>
                    <NavLink to={URL_PATHS.DATABASEPATH}>Go to DataBase</NavLink><br/>
                </section>
            </React.Fragment>
        );
    }
}

export default withRouter(Qcumber);
