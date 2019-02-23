import React, { Component } from 'react';
import GoogleMap from "../../components/GoogleMap";
import {MockPlaces, QueensUniversity} from "../../assets/locations";
import Marker from "../../components/Marker";
import SearchBar from "../../components/SearchBar";

class CampusMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mapApiLoaded: false,
            mapInstance: null,
            mapApi: null,
            places: [MockPlaces.skyline],
        };
    }
    static defaultProps = {
        center: QueensUniversity,
        zoom: 16
    };

    getMapOptions = (maps) => {
        return {
            streetViewControl: true,
            scaleControl: true,
            fullscreenControl: true,
            styles: [{
                featureType: "poi.business",
                elementType: "labels",
                stylers: [{
                    visibility: "off"
                }]
            }],
            gestureHandling: "greedy",
            disableDoubleClickZoom: true,
            minZoom: 11,
            maxZoom: 20,

            mapTypeControl: true,
            mapTypeId: maps.MapTypeId.ROADMAP,
            mapTypeControlOptions: {
                style: maps.MapTypeControlStyle.VERTICAL_BAR,
                position: maps.ControlPosition.TOP_LEFT,
                mapTypeIds: [
                    maps.MapTypeId.ROADMAP,
                    maps.MapTypeId.SATELLITE,
                    maps.MapTypeId.HYBRID
                ]
            },
            zoomControl: true,
            clickableIcons: true
        }
    };

    apiHasLoaded = (map, maps) => {
        this.setState({
            mapApiLoaded: true,
            mapInstance: map,
            mapApi: maps,
        });
    };

    addPlace = (place) => {
        this.setState({ places: place });
    };
    render() {
        const {
            places, mapApiLoaded, mapInstance, mapApi,
        } = this.state;
        return (
            <div style={{ height: '80vh', width: '100%' }}>
                {mapApiLoaded && <SearchBar map={mapInstance} mapApi={mapApi} addplace={this.addPlace} />}
                <GoogleMap
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    options = {this.getMapOptions}
                    onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
                >
                    {places.map(place => (
                        <Marker
                            key={place.id}
                            text={place.name}
                            lat={place.geometry.location.lat}
                            lng={place.geometry.location.lng}
                        />
                    ))}

                </GoogleMap>
            </div>
        );
    }

}

export default CampusMap;
