import React from "react";

import './food_show.css';

//loading:

// import LoadingIcon from "../../loading/loading_icon";
// import "../../loading/loading.css";

class FoodShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.saveFood = this.saveFood.bind(this);
  }

  componentDidMount() {
    this.props.fetchFood(this.props.match.params.foodId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.food) {
      this.setState(nextProps.food);
    }
  }

  saveFood(e){
    e.preventDefault();
  }

  render() {
    let { food } = this.props;
  
    if (food === undefined) food = {};

    return (
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
    );

  }
}

export default FoodShow;
