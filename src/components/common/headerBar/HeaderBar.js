// Packages
import React, { Fragment } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
//
import qcumberIcon from "../../../assets/images/logos/qcumber.svg";
import Text from "../../accessoriesDeprecated/Text";
// Styles
import Styles from "./HeaderBar.module.scss";
import "./_burger.scss";
import BurerItemStyles from "./WithBurger.module.scss";
// props:
// hasRightAlignedItems (Optional): if containing any navlink that aligns to right

class HeaderBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { useBurger: false };
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        this.setState({ useBurger: window.innerWidth <= 1100 });
    }

    Header(props) {
        return <div className={Styles.QHeader}>{props.children}</div>;
    }

    Hamburger(props) {
        return <Menu>{props.children}</Menu>;
    }

    WithBurger(props) {
        const Burger = this.Hamburger;
        return (
            <Burger>
                <div className={BurerItemStyles.QNavBarLink}>
                    {/* change css to design in left card.css */}
                    <NavLink to={"/qcumber"} className={BurerItemStyles.QLogo}>
                        <img width={28.2} height={28.2} src={qcumberIcon} alt={"qcumberIcon"} />
                    </NavLink>

                    {/* or refactor into a separate component */}
                    <NavLink to={"/qcumber"} className={BurerItemStyles.Qcumber} activeClassName="chosen">
                        Qcumber
                    </NavLink>
                </div>

                <NavLink to={"/"} className={BurerItemStyles.QNavBarLink} activeClassName="chosen">
                    <Text id={"home"} />
                </NavLink>
                <NavLink to={"/database"} className={BurerItemStyles.QNavBarLink} activeClassName="chosen">
                    Database
                </NavLink>
                <NavLink to={"/about"} className={BurerItemStyles.QNavBarLink} activeClassName="chosen">
                    <Text id={"about"} />
                </NavLink>

                {this.props.hasRightAlignedItems ? (
                    <Fragment>
                        <hr className={BurerItemStyles.QSeprator}/>
                        <div className={`${BurerItemStyles.QNavBarLink} ${Styles.SignUp}`}>
                            <NavLink to={"/about"}>Sign Up</NavLink>
                        </div>
                        <NavLink className={BurerItemStyles.QNavBarLink} to={"/about"}>
                            Sign In
                        </NavLink>
                    </Fragment>
                ) : null}
            </Burger>
        );
    }

    WithoutBurger(props) {
        return (
            <div className={Styles.QHeader}>
                {/* change h1 to nav items */}
                <div className={Styles.QNavBar}>
                    <div className={Styles.QNavBarList}>
                        {/* change css to design in left card.css */}
                        <NavLink to={"/qcumber"} className={Styles.QLogo}>
                            <img width={28.2} height={28.2} src={qcumberIcon} alt={"qcumberIcon"} />
                        </NavLink>

                        {/* or refactor into a separate component */}
                        <NavLink to={"/qcumber"} className={Styles.Qcumber} activeClassName="chosen">
                            Qcumber
                        </NavLink>

                        <NavLink to={"/"} activeClassName="chosen">
                            <Text id={"home"} />
                        </NavLink>
                        <NavLink to={"/database"} activeClassName="chosen">
                            Database
                        </NavLink>
                        <NavLink to={"/about"} activeClassName="chosen">
                            <Text id={"about"} />
                        </NavLink>
                    </div>
                </div>
                {this.props.hasRightAlignedItems ? (
                    <div className={Styles.QNavBarRight}>
                        <div className={Styles.SignUp}>
                            <NavLink to={"/about"}>Sign Up</NavLink>
                        </div>
                        <NavLink to={"/about"}>Sign In</NavLink>
                    </div>
                ) : null}
            </div>
        );
    }

    render() {
        const Content = this.state.useBurger ? this.WithBurger.bind(this) : this.WithoutBurger.bind(this);

        return <Content />;
    }
}

export default withRouter(HeaderBar);
