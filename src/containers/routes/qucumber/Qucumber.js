// Packages
import React                 from "react";
import {NavLink, withRouter} from "react-router-dom";
import {qucumber}            from "../../../assets/exportImages";
//
import XHelmet               from "../../../components/accessories/XHelmet";

class Qucumber extends React.Component {
  render() {
    return (
      <React.Fragment>
        <XHelmet title={"Qucumber"} favicon={qucumber}/>
        <header>
          Qucumber
        </header>
        <section>
          <NavLink to={"/database"}>Go to DataBase</NavLink><br/>
        </section>
      </React.Fragment>
    );
  }
}

export default withRouter(Qucumber);
