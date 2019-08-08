import React from "react";

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import './food_show.css';
import { saveFood } from "../../../util/foodsave_api_util";
//loading:

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class FoodShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.saveFoodItem = this.saveFoodItem.bind(this);
  }

  componentDidMount() {
    this.props.fetchFood(this.props.match.params.foodId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.food) {
      this.setState(nextProps.food);
    }
  }

  saveFoodItem(userId, foodId) {
    this.props.saveFood({userId: userId, foodId: foodId})
      .then(this.props.history.push('/saves'))
  }

  
  render() {
    let { food, userId } = this.props;
  
    if (food === undefined) food = {};

    return (
      <div className="food-show-container">
          <div className="food-show">
              <div className='food-show-photo'>
                  <img src={food.imageUrl} className="show-photo" alt="" />
              </div>

              <div className='food-show-info'>
                  <div className='food-show-name'>{food.name}</div>
                  <div className='food-show-location'>
                      <i className="fas fa-map-marker-alt"></i> &nbsp;
                      {food.address}. 
                      <br />
                      {food.city}, {food.state} {food.zipCode} 
                  </div>
                  <br />
                  <div className="food-show-price">
                      Price Range: {food.price ? food.price : "N/A"} 
                      <br />
                      Rating: <span className={`rating-static rating-${food.rating * 10}`} />
                  </div>
                  {this.props.loggedIn ? 
                    <div className='food-save' onClick={this.saveFood}>
                      <i className="fas fa-heart"></i> Click to Save
                    </div> : <div className='food-save'>
                      <i className="fas fa-heart"></i> Please Sign in to Save
                    </div>}
              </div>
          </div>

          <div className="drink-map">
            <Map center={[food.lat, food.lng]} zoom={13} style={{ height: "300px", width: "300px", position: "absolute" }}>
              <TileLayer
                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
              />

             
               <Marker position={[food.lat, food.lng]}>
                    <Popup>
                        {food.name}
                        <br />
                        {food.address}.
                        <br />
                        {food.city}, {food.state} {food.zipCode}
                    </Popup>
                </Marker>

            </Map>
          </div>
        </div>
    );

  }
}

export default FoodShow;
