import React from "react"
import {withRouter} from "react-router-dom";
import styled from 'styled-components';
import {DatabaseLogo} from "../../../assets/exportImages";
import './Database.css';
import { getMessageByTypes } from "../../../utilities/TypeHelper";
import { CONTAINER_TYPES, MESSAGE_KEYS } from "../../../utilities/constants/constants";
import { injectIntl } from "react-intl";
import Card from "../../../components/widgets/Card";
import HeaderBar from "../../../components/widgets/HeaderBar";
import CustomButton from "../../../components/widgets/CustomButton";
import messages from "../../../assets/languages/defaultMessage";

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

class Database extends React.Component{

    // an example for customized onClick prop for 'CustomButton' component
    onToggle =()=>{
      window.alert("this is a test");
    }

    render() {

        // hooked to api later
        const supportedContainerTypeArray = [CONTAINER_TYPES.GRADE_DISTRIBUTION, CONTAINER_TYPES.COURSE_CATALOG, CONTAINER_TYPES.DEGREE_PLANNING, CONTAINER_TYPES.SECRET_LIBRARY];

        //const gradeDistributionDescp = this.props.intl.formatMessage(getMessageByTypes(MESSAGE_KEYS.DESCRIPTION, CONTAINER_TYPES.GRADE_DISTRIBUTION))
        return(
            <React.Fragment>
              <Wrapper>
                <HeaderBar hasRightAlignedItems={true}/>

                <Logo src={DatabaseLogo} alt={"DatabaseLogo"}/>
                <TitleBar>
                    {/* need to intl-format */}
                    <h1>Qcumber Database</h1>
                    <h2>Everything about a Queen's course</h2>
                </TitleBar>

                <div className="QcumberCardsWrapper">
                      {supportedContainerTypeArray.map((typeObject,index) => (
                        <Card 
                        key={index}
                        backgroundImageName={typeObject}
                        title={this.props.intl.formatMessage(getMessageByTypes(MESSAGE_KEYS.TITLE, typeObject))}
                        description={this.props.intl.formatMessage(getMessageByTypes(MESSAGE_KEYS.DESCRIPTION, typeObject))}
                      />))}
                </div>

                <div className="ContributionText">
                  {/* need to intl-format */}
                  <p>Would you like to contribute to Qcumber's data?<br />You may have what we're looking for.</p>
                
                  <CustomButton onClick={this.onToggle} btnText={this.props.intl.formatMessage(messages.checkOurPostings)}/>
                </div>
              </Wrapper>
            </React.Fragment>
        );
    }
}

export default injectIntl(withRouter(Database))
