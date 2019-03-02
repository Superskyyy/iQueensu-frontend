import React from "react"
import CampusMap from "./CampusMap";
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

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
                <header>
                    Qhousing
                </header>
                <section>
                    <NavLink to={"/"}>Back to Home Page</NavLink>
                </section>
                <CampusMapWrapper>
                    <CampusMap/>
                </CampusMapWrapper>
            </React.Fragment>
        );
    }
}

export default Qhousing
