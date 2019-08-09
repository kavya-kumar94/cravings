import React from "react";

import "./drink_show.css";
import { Map, Marker,Popup,TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class DrinkShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.saveDrinkItem = this.saveDrinkItem.bind(this);
  }

  componentDidMount() {
    this.props.fetchDrink(this.props.match.params.drinkId);
    this.props.fetchDrinkSave({userId: this.props.userId, drinkId: this.props.drinkId})
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.drink) {
      this.setState(nextProps.drink);
    }
  }

  saveDrinkItem(userId, drinkId) {
    this.props.saveDrink({userId: userId, drinkId: drinkId})
    .then(this.props.history.push('/saves'));
  }

  render() {
    let { drink, userId } = this.props;

    if (drink === undefined) drink = {};

    return (
      <div className="drink-show-container">
        <div className="drink-show">
          <div className="drink-show-photo">
              <img src={drink.imageUrl} className="show-photo" alt="" />
          </div>

          <div className="drink-show-info">
              <div className="drink-show-name">{drink.name}</div>
              <div className="drink-show-location">
                  <i className="fas fa-map-marker-alt" /> &nbsp;
                  {drink.address}.
                  <br />
                  {drink.city}, {drink.state} {drink.zipCode}
              </div>
              <br />
              <div className="drink-show-price">
                  Price Range: {drink.price ? drink.price : "N/A"}
                  <br />
                  Rating:{" "}
                  <span className={`rating-static rating-${drink.rating * 10}`} />
              </div>
            {this.props.loggedIn ?
              <div className='drink-save' onClick={() => this.saveDrinkItem(userId, drink.id)}>
                <i className="fas fa-heart"></i> Click to Save
                    </div> : <div className='drink-save'>
                <i className="fas fa-heart"></i> Please Sign in to Save
                    </div>}
          </div>
          
        </div>

        <div className="drink-map-container">
          <Map className='drink-map' center={[drink.lat, drink.lng]} zoom={13} style={{ height: "250px", width: "800px", position: "absolute" }}>
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            />

            <Marker position={[drink.lat, drink.lng]}>
              <Popup>
                {drink.name}
                <br />
                {drink.address}.
                      <br />
                {drink.city}, {drink.state} {drink.zipCode}
              </Popup>
            </Marker>

          </Map>
        </div>
      </div>
    );
  }
}

export default DrinkShow;
