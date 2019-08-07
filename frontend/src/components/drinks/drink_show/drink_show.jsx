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
            <div className="drink-show">
                <p>{drink.name}</p>
                <p>{drink.address}, {drink.city}, {drink.state} {drink.zipCode}</p>
                <p>{drink.price}</p>
                <div className="drink-photo-rating">
                    <div className={`rating-static rating-${drink.rating * 10}`}>
                    </div>
                    <img src={drink.imageUrl} className="drink-photo" alt="" />
                </div>
            </div>
        )
    };
 
}

export default DrinkShow;