import React from "react";

import "./drink_show.css";
// import { withRouter } from 'react-router-dom';

class DrinkShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchDrink(this.props.match.params.drinkId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.drink) {
      this.setState(nextProps.drink);
    }
  }

  render() {
    let { drink } = this.props;

    if (drink === undefined) drink = {};

    return (
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
        </div>
        
      </div>
    );
  }
}

export default DrinkShow;
