const google = window.google;

class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(locations) {
        let locationObj = {};
        locations.forEach(location => locationObj[location.id] = location);

        locations
            .filter(location => !this.markers[location.id])
            .forEach(newLocation => this.createMarkerFromSpot(newLocation));

        Object.keys(this.markers)
            .filter(locationId => !locationObj[locationId])
            .forEach(locationId => this.removeMarker(this.markers[locationId]));

    }


    createMarkerFromSpot(location) {
        const position = new google.maps.LatLng(location.lat, location.lng);
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            locationId: location.id
        });

        marker.addListener('click', () => this.handleClick(location));
        this.markers[marker.locationId] = marker;
    }

    removeMarker(marker) {
        if (this.markers[marker.id]) {
            this.markers[marker.id].setMap(null);
            delete this.markers[marker.id];
        }

    }
}

export default MarkerManager;