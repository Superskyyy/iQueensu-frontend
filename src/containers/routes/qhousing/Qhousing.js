import React from "react"
import CampusMap from "./CampusMap";
import {NavLink, withRouter} from "react-router-dom";
import styled from 'styled-components';
import XHelmet from "../../../components/accessories/XHelmet";
import {qhousing} from "../../../assets/exportImages";

const CampusMapWrapper = styled.section`
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
class Qhousing extends React.Component {
    render() {
        return(
            <React.Fragment>
                <XHelmet title={"Qhousing"} favicon={qhousing}/>
                <header>
                    Qhousing
                </header>
                <section>
                    <NavLink to={"/"}>Back to Home Page</NavLink><br/>
                </section>
                <CampusMapWrapper>
                    <CampusMap/>
                </CampusMapWrapper>
            </React.Fragment>
        );
    }
}

export default withRouter(Qhousing);
