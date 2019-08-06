import React from 'react';
import { Link } from 'react-router-dom';
import './drinks.css';

class DrinksIndexItem extends React.Component {

    render() {
        const { drink } = this.props;
        return (
            <div className="drinks-index-item">
                <div className="drink-picture">
                    <img src={drink.imageUrl} className="drink-photo" alt="" />
                </div>

                <Link className='drink-info' to={`/drinks/${drink.id}`}>
                    
                    <div className='drink-name'>
                        {drink.name}
                    </div>
                    
                    <div className='drink-full-address'>
                        {drink.address}, {drink.city}, {drink.state} {drink.zipCode}
                    </div>

                    <div className='drink-price'>
                        {drink.price}
                    </div>

                </Link>
            </div>
        );
    }
}

export default DrinksIndexItem;