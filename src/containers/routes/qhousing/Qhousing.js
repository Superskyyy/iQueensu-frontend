// Packages
import React, {Component, Fragment} from "react";
import {withRouter}                 from "react-router-dom";
//
import CampusMap                    from "./CampusMap";
import {qhousing}                   from "../../../assets/exportImages";
import XHelmet                      from "../../../components/accessories/XHelmet";
// Styles
import styles                       from "./Qhousing.module.css";

class Qhousing extends Component {
    render() {
        return (
            <Fragment>
                <XHelmet title={"Qhousing"} favicon={qhousing}/>
                <header>
                    Qhousing
                </header>
                <section className={styles.CampusMapWrapper}>
                    <CampusMap/>
                </section>
            </Fragment>
        );
    }
}

export default withRouter(Qhousing);
