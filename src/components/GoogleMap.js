import React,{Fragment} from "react";
import PropTypes from "prop-types";
import GoogleMapReact from 'google-map-react';
import {GoogleMapApi} from "../utils/api";


const GoogleMap = ({ children, ...props }) => (
    <Fragment>
        <GoogleMapReact
            bootstrapURLKeys={{
                key:GoogleMapApi,
                language: 'en',
                region: 'ca',
                libraries: ['places','geometry']
            }}
            yesIWantToUseGoogleMapApiInternals = {true}
            {...props}
        >
            {children}
        </GoogleMapReact>
    </Fragment>
);

GoogleMap.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]),
};

GoogleMap.defaultProps = {
    children: null,
};

export default GoogleMap;
