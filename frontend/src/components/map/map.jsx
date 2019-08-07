import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';
// import queryString from 'query-string';
const google = window.google;

class Map extends React.Component {
    constructor(props) {
        super(props);
        // this.renderMap = this.renderMap.bind(this);
    }

    componentDidMount() {
        // set the map to show SF
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        };

        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
    }


    render() {
        return (
            <div
                id="map-container"
                ref={map => this.mapNode = map}>
            </div>
        );
    }

    // componentDidMount() {
    //     this.renderMap();
    // }

    // componentDidUpdate(prevProps) {
    //     this.MarkerManager.updateMarkers(this.props.spots);
    //     if (prevProps.location.search !== this.props.location.search) {
    //         this.renderMap();
    //     }
    // }


    // registerListeners() {
    //     google.maps.event.addListener(this.map, 'idle', () => {
    //         const { north, south, east, west } = this.map.getBounds().toJSON();

    //         let bounds = {
    //             northEast: { lat: north, lng: east },
    //             southWest: { lat: south, lng: west }
    //         };

    //         this.props.updateFilter("bounds", bounds);
    //     });
    // }



    // renderMap() {

    //     let coords;

    //     if (this.props.location.search) {
    //         coords = queryString.parse(this.props.location.search);
    //     } else {
    //         coords = this.props.search;
    //     }

    //     const mapOptions = {
    //         center: { lat: parseFloat(coords.lat), lng: parseFloat(coords.lng) },
    //         zoom: 13
    //     };


    //     this.map = new google.maps.Map(this.mapNode, mapOptions);
    //     this.registerListeners();
    //     this.MarkerManager = new MarkerManager(this.map);

    //     this.MarkerManager.updateMarkers(this.props.spots);

    // }

    // componentWillUnmount() {
    //     google.maps.event.clearListeners(this.map, 'idle');
    // }


}

export default withRouter(Map);