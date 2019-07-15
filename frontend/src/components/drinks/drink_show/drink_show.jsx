import React from 'react';
// import { withRouter } from 'react-router-dom';

class DrinkShow extends React.Component {

    componentDidMount() {
        this.props.fetchDrink(this.props.match.params.drinkId);
    }

    render() {

        if (this.props.drink === undefined) return null;
        
        const { drink } = this.props;

        return (
            <div>
                <img src={drink.imageUrl} className="drink-photo" />
                <h3>{drink.name}</h3>
                <h3>{drink.address}, {drink.city}, {drink.state} {drink.zipCode}</h3>
                <h3>{drink.price}</h3>
                <h3>{drink.rating}</h3>
            </div>
        )
    };
 
}

export default DrinkShow;