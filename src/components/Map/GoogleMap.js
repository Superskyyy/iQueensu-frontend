import React,{Fragment} from "react";
import PropTypes from "prop-types";


const GoogleMap = ({ children, ...props }) => (
    <Fragment>
        <GoogleMapReact
            bootstrapURLKeys={{
                key: process.env.REACT_APP_MAP_KEY,
            }}
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