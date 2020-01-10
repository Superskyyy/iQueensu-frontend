// Packages
import PropTypes         from "prop-types";
import React, {Fragment} from "react";
// Styles
import styles from "./Navigation.module.css"

export const NavItem = (props) => (
    <Fragment>
        <td className={styles.Button} onClick={props.event} title={props.name}>{props.name}</td>
    </Fragment>
);

export default (props) => (
    <Fragment>
        <table className={styles.Wrapper}>
            <tbody>
            <tr>
                {props.children}
            </tr>
            </tbody>
        </table>
    </Fragment>
);


NavItem.propTypes = {
    event: PropTypes.func,
    name: PropTypes.string,
};

NavItem.defaultProps = {
    event: undefined,
    name: "undefined",
};
