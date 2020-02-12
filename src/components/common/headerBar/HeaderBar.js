// Packages
import React, {Fragment}     from "react";
import {NavLink, withRouter} from "react-router-dom";
//
import qcumberIcon          from "../../../assets/images/logos/qcumber.svg";
import Text                  from "../../accessoriesDeprecated/Text";
// Styles
import styles                from './HeaderBar.module.css';
import scssStyles            from './HeaderBar.module.scss';
// props:
// hasRightAlignedItems (Optional): if containing any navlink that aligns to right

class HeaderBar extends React.Component {
    render() {
        return (
            <Fragment>
                <div className={styles.QHeader}>
                    {/* change h1 to nav items */}
                    <div className={styles.QNavBar}>
                        <div className={scssStyles.QNavBarList}>
                            {/* change css to design in left card.css */}
                            <NavLink to={"/qcumber"} className={styles.QLogo}>
                                <img width={28.2} height={28.2} src={qcumberIcon} alt={"qcumberIcon"}/>
                            </NavLink>

                            {/* or refactor into a separate component */}
                            <NavLink to={"/qcumber"} className={scssStyles.Qcumber} activeClassName="chosen" >Qcumber</NavLink>

                            <NavLink to={"/"} activeClassName="chosen"><Text id={"home"}/></NavLink>
                            <NavLink to={"/database"} activeClassName="chosen">Database</NavLink>
                            <NavLink to={"/about"} activeClassName="chosen"><Text id={"about"}/></NavLink>
                        </div>
                    </div>
                    {this.props.hasRightAlignedItems ?
                        <div className={scssStyles.QNavBarRight}>
                            <div className={scssStyles.SignUp}>
                                <NavLink to={"/about"}>Sign Up</NavLink>
                            </div>
                            <NavLink to={"/about"}>Sign In</NavLink>
                        </div> : null}
                </div>
            </Fragment>
        );
    }

}

export default withRouter(HeaderBar);
