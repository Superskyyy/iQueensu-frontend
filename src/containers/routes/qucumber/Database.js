// Packages
import React                           from "react";
import {injectIntl}                    from "react-intl";
import {withRouter}                    from "react-router-dom";
//
import {DatabaseLogo}                  from "../../../assets/exportImages";
import messages                        from "../../../assets/languages/defaultMessage";
import Card                            from "../../../components/widgets/Card/Card";
import CustomNavButton                 from "../../../components/widgets/CustomNavButton/CustomNavButton";
import HeaderBar                       from "../../../components/widgets/HeaderBar/HeaderBar";
import {CONTAINER_TYPES, MESSAGE_KEYS} from "../../../utilities/constants/constants";
import {getMessageByTypes}             from "../../../utilities/TypeHelper";
// Styles
import styles                          from './Database.module.css';

class Database extends React.Component {
    // an example for customized onClick prop for 'CustomButton' component
    onToggle = () => {
        window.location.href = "/database/course";
        // window.alert("this is a test");
    };

    render() {

        // hooked to api later
        const supportedContainerTypeArray = [CONTAINER_TYPES.GRADE_DISTRIBUTION, CONTAINER_TYPES.COURSE_CATALOG, CONTAINER_TYPES.DEGREE_PLANNING, CONTAINER_TYPES.SECRET_LIBRARY];

        //const gradeDistributionDescp = this.props.intl.formatMessage(getMessageByTypes(MESSAGE_KEYS.DESCRIPTION, CONTAINER_TYPES.GRADE_DISTRIBUTION))
        return (
            <React.Fragment>
                <section className={styles.Wrapper}>
                    <HeaderBar hasRightAlignedItems={true}/>

                    <img className={styles.Logo} src={DatabaseLogo} alt={"DatabaseLogo"}/>
                    <div className={styles.TitleBar}>
                        {/* need to intl-format */}
                        <h1>Qcumber Database</h1>
                        <h2>Everything about a Queen's course</h2>
                    </div>

                    <div className={styles.QcumberCardsWrapper}>
                        {supportedContainerTypeArray.map((typeObject, index) => (
                            <Card
                                key={index}
                                backgroundImageName={typeObject}
                                title={this.props.intl.formatMessage(getMessageByTypes(MESSAGE_KEYS.TITLE, typeObject))}
                                description={this.props.intl.formatMessage(getMessageByTypes(MESSAGE_KEYS.DESCRIPTION, typeObject))}
                            />))}
                    </div>

                    <div className={styles.ContributionText}>
                        {/* need to intl-format */}
                        <p>Would you like to contribute to Qcumber's data?<br/>You may have what we're looking for.</p>

                        <CustomNavButton toWhere="/database/course"
                                         btnText={this.props.intl.formatMessage(messages.checkOurPostings)}/>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default withRouter(injectIntl(Database));
