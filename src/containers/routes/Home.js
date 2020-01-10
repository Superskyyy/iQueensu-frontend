// Packages
import React, {Component, Fragment} from 'react';
import {NavLink, withRouter}        from "react-router-dom";
import {logo}                       from "../../assets/exportImages";
import ProfilePicButton             from '../../components/accessories/ProfilePicButton';
//
import Text                         from "../../components/accessories/Text";
import XHelmet                      from "../../components/accessories/XHelmet";
// Styles
import styles                       from './Home.module.css';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles.InternationalHeader}>
          {/* change h1 to nav items */}
          <div className={styles.NavBar}>
            <div className={styles.NavBarList}>
              {/* <XHelmet title={"iQueensU"} favicon={logo}/>
                        <h3><Text id={"home"}/></h3>
                        <NavLink to={"/qhousing"}>Go Qhousing</NavLink><br/>
                        <NavLink to={"/qucumber"}>Go Qucumber</NavLink><br/>
                        chosen can be for later use */}
              <XHelmet title={"iQueensU"} favicon={logo}/>
              <NavLink to={"/"} activeClassName="chosen"><Text id={"home"}/></NavLink>
              <NavLink to={"/test1"} activeClassName="chosen"><Text id={"forum"}/></NavLink>
              <NavLink to={"/qhousing"} activeClassName="chosen">Qhousing</NavLink>
              <NavLink to={"/qucumber"} activeClassName="chosen">Qucumber</NavLink>
              <NavLink to={"/test3"} activeClassName="chosen" style={{"margin": "0px 59px 0px 8px"}}>Qwiki</NavLink>
              <NavLink to={"/test4"} activeClassName="chosen"><Text id={"contact"}/></NavLink>
              <NavLink to={"/test4"} activeClassName="chosen"><Text id={"about"}/></NavLink>
              <NavLink to={"/test5"} activeClassName="chosen" style={{"margin": "0px 8px 0px 57px"}}>i<span
                style={{"color": "#003060"}}>Queensu</span></NavLink>
            </div>
          </div>

          {/* refactor into a separate component */}
          <div className={styles.UserBadge}>
            <div className="panel">
              <ProfilePicButton/>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

// make sure 'withRouter()' is the outest func cuz it will generate <Route>{Childern}</Route> to help BOM figure out history
export default withRouter(Home);
