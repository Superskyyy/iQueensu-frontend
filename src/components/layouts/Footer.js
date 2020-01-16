// Packages
import PropTypes         from "prop-types";
import React, {Fragment} from "react";
// Styles
import styles            from "./Footer.module.css";

const year = new Date().getFullYear();

const Copyright = (props) => (
    <Fragment>
        <div className="Copyright-wrapper">Copyright © {props.year} {props.name} Inc. All rights reserved.</div>
    </Fragment>
);

Copyright.prototype = {
    year: PropTypes.object,
    name: PropTypes.string
};

Copyright.defaultProps = {
    year: null,
    name: null
};

const Info = (props) => (
    <Fragment>
        {props.children}
    </Fragment>
);

Info.prototype = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]),
};

Info.defaultProps = {
    children: null
};

export default () => (
    <Fragment>
        <footer className={styles.Wrapper}>
            <Info/>
            <Copyright year={year} name={"iQueensU"}/>
        </footer>
    </Fragment>
);
