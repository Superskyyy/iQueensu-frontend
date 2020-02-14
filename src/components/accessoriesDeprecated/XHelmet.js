// Packages
import PropTypes         from "prop-types";
import React, {Fragment} from "react";
import {Helmet}          from "react-helmet";


const XHelmet = (props) => (
    <Fragment>
        <Helmet>
            <meta charSet="utf-8"/>
            <link rel="icon" href={"../../assets/logos/qcumber.svg"} type="image/x-icon"/>
            <link rel="shortcut icon" href={"../../assets/logos/qcumber.svg"} type="image/x-icon"/>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta name="theme-color" content={props.theme}/>
            <link rel="manifest" href={props.manifest}/>
            <title>{props.title}</title>
        </Helmet>
    </Fragment>
);

XHelmet.propTypes = {
    favicon: PropTypes.string,
    theme: PropTypes.string,
    manifest: PropTypes.string,
    title: PropTypes.string
};

XHelmet.defaultProps = {
    favicon: "favicon.ico",
    theme: "#000000",
    manifest: "manifest.json",
    title: "React Helmet"
};
export default XHelmet;
