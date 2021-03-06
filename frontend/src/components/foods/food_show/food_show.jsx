import React from "react";

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import './food_show.css';

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
    this.checkFoodSave = this.checkFoodSave.bind(this);
    this.unsaveFoodItem = this.unsaveFoodItem.bind(this);
  }

  componentDidMount() {
    // this.props.fetchFood(this.props.match.params.foodId);
    this.props.fetchFood(this.props.match.params.foodId)
    .then(() => {
      if(this.props.loggedIn) {
        this.props.fetchFoodSave({userId: this.props.currentUser.id, foodId: this.props.match.params.foodId})
      }

    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.food) {
      this.setState(nextProps.food);
    }
  }

  saveFoodItem(userId, foodId) {
    let { currentUser } = this.props;
    this.props.saveFood({userId: currentUser.id, foodId: foodId})
      .then(() => this.props.history.push('/saves'))
  }

  unsaveFoodItem(foodId) {
    this.props.unsaveFood({_id: foodId})
      .then(() => this.props.history.push('/saves'));
  }

  checkFoodSave() {
    if (this.props.loggedIn) {
      if (this.props.foodSave[0] !== "undefined") {
        return (<div className='food-save' onClick={() => this.unsaveFoodItem(this.props.foodSave[0])}>
          <i className="fas fa-heart"></i> Click to Unsave
          </div>

        )
      } else {
        return (
          <div className='food-save' onClick={() => this.saveFoodItem(this.props.currentUser.id, this.props.food.id)}>
            <i className="fas fa-heart"></i> Click to Save
              </div>
        )
      }
    } else {
      return (<div className='food-save'>
        <i className="fas fa-heart"></i> Please Sign in to Save
          </div>

      )
    }
  }

  
  render() {
    let { food } = this.props;
  
    
    if (!Object.keys(food).length) return <div></div>;

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
                {this.checkFoodSave()}
              </div>
          </div>

          

          <div className="food-map-container">
            <Map className="food-map" center={[food.lat, food.lng]} zoom={13} style={{ height: "250px", width: "800px" }}>
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
