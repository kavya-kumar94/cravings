import React from "react";

//loading:

import LoadingIcon from "../../loading/loading_icon";
import "../../loading/loading.css";

class FoodShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchFood(this.props.match.params.foodId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.food) {
      this.setState(nextProps.food);
    }
  }

  render() {
    let { food } = this.props;
    // debugger
    if (food === undefined) food = {};
    // if (this.props.loading) {
    //     return <LoadingIcon />
    // }
    // if (this.props.loading) {
    //     console.log('detail loading');
    //     return <LoadingIcon />
    // } else {
    debugger;
    console.log("i mounted!");
    return (
      <div className="food-show">
        <p>{food.name}</p>
        <p>
          {food.address}, {food.city}, {food.state} {food.zipCode}
        </p>
        <p>{food.price}</p>
        <div className="photo-rating">
          <div className={`rating-static rating-${food.rating * 10}`} />
          <img src={food.imageUrl} className="food-photo" />
        </div>
        <img src={food.imageUrl} className="food-photo" alt="" />
      </div>
    );

    // }
  }
}

export default FoodShow;
