import React, {Component} from "react";
import {GoogleMapApi} from "../../utils/apiKey";

class CampusMap extends Component{
    static defaultProps = {
        key: GoogleMapApi,
        center: {
            lat: 44.2312,
            lng: -76.4951
        },
        zoom: 16
    };

    render() {
        return(
          <div>

          </div>
        );
    }
}

export default CampusMap