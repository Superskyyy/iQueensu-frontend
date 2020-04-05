// Packages
import React, { FC } from "react";
import { injectIntl, WrappedComponentProps } from "react-intl";
import { withRouter, RouteComponentProps } from "react-router-dom";
// import { DatabaseLogo } from "../../../../assets/exportImages";
import { ReactComponent as DatabaseLogo } from "../../../../assets/images/Qcumber/pluto-searching.svg";
import messages from "../../../../assets/languages/defaultMessage";
import CardTS from "./Card/CardTS";
import CustomNavButton from "../../../../components/common/customNavButton/CustomNavButton";
import { CONTAINER_TYPES, MESSAGE_KEYS } from "../../../../utilities/constants/constants";
import { getMessageByTypes } from "../../../../utilities/TypeHelper";
// Styles
import scssStyles from "./Database.module.scss";
import CustomSearch from "../../../../components/common/customSearch/CustomSearch";

export interface DatabaseProps extends RouteComponentProps<any> {
    id: string;
}

interface LogoProps {
    className?: string;
    style?: {};
}

export const TestLogo: FC<LogoProps> = (props) => {
    return <DatabaseLogo {...props} />;
};

class DatabaseTS extends React.Component<DatabaseProps & WrappedComponentProps, {}> {
    render() {
        // hooked to api later
        const supportedContainerTypeArray = [
            CONTAINER_TYPES.GRADE_DISTRIBUTION,
            CONTAINER_TYPES.COURSE_CATALOG,
            CONTAINER_TYPES.DEGREE_PLANNING,
            CONTAINER_TYPES.SECRET_LIBRARY,
        ];

        //const gradeDistributionDescp = this.props.intl.formatMessage(getMessageByTypes(MESSAGE_KEYS.DESCRIPTION, CONTAINER_TYPES.GRADE_DISTRIBUTION))
        return (
            <section id={this.props.id} className={scssStyles.Wrapper}>
                <DatabaseLogo className={scssStyles.Logo} />

                <div className={scssStyles.TitleBar}>
                    {/* need to intl-format */}
                    <h1>Qcumber Database</h1>
                    <h2>Everything about a Queen's course</h2>
                </div>

                <div className={scssStyles.search}>
                    <CustomSearch />
                </div>

                <div className={scssStyles.QcumberCardsWrapper}>
                    {supportedContainerTypeArray.map((typeObject, index) => (
                        <CardTS
                            key={index}
                            backgroundImageName={typeObject}
                            title={this.props.intl.formatMessage(messages.courseCatalogTitle)}
                            // description={ getMessageByTypes(MESSAGE_KEYS.DESCRIPTION, typeObject)}
                            description={this.props.intl.formatMessage(messages.degreePlanningDescription)}
                        />
                    ))}
                </div>

                <div className={scssStyles.ContributionText}>
                    {/* need to intl-format */}
                    <p>
                        Would you like to contribute to Qcumber's data?
                        <br />
                        You may have what we're looking for.
                    </p>

                    <CustomNavButton
                        toWhere="/database/course"
                        btnText={this.props.intl.formatMessage(messages.checkOurPostings)}
                    />
                </div>
            </section>
        );
    }
}

export default injectIntl(withRouter(DatabaseTS));
