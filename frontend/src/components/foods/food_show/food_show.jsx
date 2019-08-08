import React from "react";
import './food_show.css';
import { saveFood } from "../../../util/foodsave_api_util";
//loading:

// import LoadingIcon from "../../loading/loading_icon";
// import "../../loading/loading.css";

class FoodShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.saveFoodItem = this.saveFoodItem.bind(this);
  }

  componentDidMount() {
    this.props.fetchFood(this.props.match.params.foodId);
    // this.props.fetchFoodSave(this.props.food.id)
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
                    Price Range: {food.price} 
                    <br />
                    Rating: <span className={`rating-static rating-${food.rating * 10}`} />
                    <br />
                    Type: {food.category}
                </div>
                {this.props.loggedIn ? 
                  <div className='food-save' onClick={() => this.saveFoodItem(userId, food.id)}>
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
