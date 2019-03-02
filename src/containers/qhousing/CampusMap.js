import React, { Component } from 'react';
import GoogleMap from "../../components/GoogleMap";
import {MockPlaces, QueensUniversity} from "../../assets/locations";
import Marker from "../../components/Marker";
import SearchBar from "../../components/SearchBar";
import styled from 'styled-components';

const Wrapper = styled.div`
  display: table;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const MapWrapper = styled.div`
  display: table-cell;
  align-items: center;
  justify-content: center;
`;
const SelectBoxWrapper = styled.div`
  display: table-cell;
  align-items: center;
  text-align-all: center;
  justify-content: center;
`;
class CampusMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mapApiLoaded: false,
            mapInstance: null,
            mapApi: null,
            places: [MockPlaces[0],MockPlaces[1]],
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
            <div>
                <Wrapper>
                    <MapWrapper style={{ height: '80vh', width: '70%' }}>
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
                    </MapWrapper>
                    <SelectBoxWrapper style={{ height: '80vh', width: '30%' }}>
                        {mapApiLoaded && <SearchBar map={mapInstance} mapApi={mapApi} addplace={this.addPlace} />}
                    </SelectBoxWrapper>
                </Wrapper>
            </div>
        );
    }

}

export default CampusMap;
