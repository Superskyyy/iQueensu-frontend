import React from "react"
import {NavLink, withRouter} from "react-router-dom";
import styled from 'styled-components';
import Text from "../../../components/accessories/Text";
import {btnGDBtn, btnCCBtn, btnDPBtn, btnSLBtn, DatabaseLogo} from "../../../assets/exportImages";
import test from "../../../assets/images/Qucumber/Q01GD-BG-2x.png"
import './Database.css';
import qucumberIcon from "../../../assets/images/logos/qucumber.svg";
import { getMessageByTypes } from "../../../utilities/TypeHelper";
import { TYPES, MESSAGE_KEYS } from "../../../utilities/constants/constants";
import { injectIntl } from "react-intl";

const Wrapper = styled.section`
  @media screen and (max-width: 700px) {
  .column {
    width: 100%;
    display: block;
  }
}
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const Logo = styled.img`
  position: relative;
  align-items: center;
  justify-content: center;
  width: 15%;
  height: 15%;
  margin-top:80px;
`;
const TitleBar = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  h1{
  font-family: Raleway,sans-serif;
  font-size: 36px;
  margin-bottom: 0;
  }
  h2{
  font-family: Raleway,sans-serif;
  font-size: 16px;
  }
`;
const Row = styled.div`
  margin: 0px 406px 0px 406px;
  padding: 0;
  content: "";
  clear: both;
  display: table;
`;
const Col = styled.div`
  float: left;
  width: 260px;
  height: 250px;
  margin-bottom: 16px;
  padding: 0px 8px 0px 0px;
`;
const BtnWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  align-items: center;
  background-size: 100% 100%;
  h1{
  padding-top: 30%;
  color: white;
  font-family: Raleway,sans-serif;
  font-size: 64%;
  margin-bottom: 0;
  }
  h2{
  color: white;
  font-family: Raleway,sans-serif;
  font-size: 30%;
  }
`;
const FooterWrapper = styled.section`
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const Btn = (props) => {
    return(
        <BtnWrapper style={{"backgroundImage":"url(" + props.bg + ")"}}>
                <h1>{props.title}</h1>
                <h2>{props.subTitle}</h2>
        </BtnWrapper>
    );
};

class Database extends React.Component{
    render() {
        const gradeDistributionDescp = this.props.intl.formatMessage(getMessageByTypes(MESSAGE_KEYS.DESCRIPTION, TYPES.GRADE_DISTRIBUTION))
        console.log(gradeDistributionDescp)
        return(
            <React.Fragment>
              <Wrapper>
                <div className="QcumberHeader" id="QcumberHeader">
                    {/* change h1 to nav items */}
                    <div className="QcumberNavbar" id="QcumberNavbar">
                        <div className="QcumberNavBarList">
                        <NavLink to={"/qucumber"} style={
                          {"margin":"0px 0px 0px 140px",
                          "padding": "25px 0px"
                          }}><img width={28.2} height={28.2} src={qucumberIcon} /></NavLink>
                        <NavLink to={"/qucumber"} activeClassName="chosen" style={
                          {"fontFamily": "CalistoMT",
                           "fontSize": "20px",
                           "padding": "28px 15px 28px 0px",
                          }}>Qcumber</NavLink> 
                        <NavLink to={"/"} activeClassName="chosen"><Text id={"home"}/></NavLink>
                        <NavLink to={"/database"} activeClassName="chosen">Database</NavLink>
                        <NavLink to={"/about"} activeClassName="chosen"><Text id={"about"}/></NavLink>
                        </div>
                     </div>

                     <div id="QcumberNavbarRight">
                       <div id="signUp">
                        <NavLink to={"/about"}>Sign Up</NavLink>
                        </div>
                        <NavLink to={"/about"} style={
                          {"padding": "28px 200px 28px 15px"
                          }}>Sign In</NavLink>
                     </div>
                </div>
                    <Logo src={DatabaseLogo} alt={"DatabaseLogo"}/>
                    <TitleBar>
                        <h1>Qcumber Database</h1>
                        <h2>Everything about a Queen's course</h2>
                    </TitleBar>
                    <Row>
                        <Col>
                            <Btn bg={btnGDBtn}
                                 title={"Grade Distribution"}
                                 subTitle={gradeDistributionDescp}/>
                        </Col>
                        <Col>
                            <Btn bg={btnCCBtn}
                                 title={"Grade Distribution"}
                                 subTitle={gradeDistributionDescp}/>
                        </Col>
                        <Col>
                            <Btn bg={btnDPBtn}
                                 title={"Grade Distribution"}
                                 subTitle={"Looking for a bird course?"}/>
                        </Col>
                        <Col>
                            <Btn bg={btnSLBtn}
                                 title={"Grade Distribution"}
                                 subTitle={"Looking for a bird course?"}/>
                        </Col>
                    </Row>
                    <div className="ContributionText">
                      <p>Would you like to contribute to Qcumber's data? <br /> You may have what we're looking for. </p>
                    </div>
                </Wrapper>
                <FooterWrapper>
                    Footer a
                </FooterWrapper>
            </React.Fragment>
        );
    }
}

export default injectIntl(withRouter(Database))
