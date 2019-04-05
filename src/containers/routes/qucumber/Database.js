import React from "react"
import {withRouter} from "react-router-dom";
import styled from 'styled-components';
import {btnGDBtn, btnCCBtn, btnDPBtn, btnSLBtn, DatabaseLogo} from "../../../assets/exportImages";

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
  width: 100%;
  margin: 0;
  padding: 0;
  content: "";
  clear: both;
  display: table;
`;
const Col = styled.div`
  float: left;
  width: 23%;
  margin-bottom: 16px;
  padding: 0 8px;
`;
const BtnWrapper = styled.div`
  width: 305px;
  height: 298px;
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
        return(
            <React.Fragment>
                <Wrapper>
                    <Logo src={DatabaseLogo} alt={"DatabaseLogo"}/>
                    <TitleBar>
                        <h1>Qcumber Database</h1>
                        <h2>Everything about a Queen's course</h2>
                    </TitleBar>
                    <Row>
                        <Col>
                            <Btn bg={btnGDBtn}
                                 title={"Grade Distribution"}
                                 ubTitle={"Looking for a bird course?"}/>
                        </Col>
                        <Col>
                            <Btn bg={btnCCBtn}
                                 title={"Grade Distribution"}
                                 subTitle={"Looking for a bird course?"}/>
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
                </Wrapper>
                <FooterWrapper>
                    Footer a
                </FooterWrapper>
            </React.Fragment>
        );
    }
}

export default withRouter(Database)
