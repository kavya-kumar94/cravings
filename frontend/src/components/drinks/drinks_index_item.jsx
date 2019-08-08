import React from 'react';
import { Link } from 'react-router-dom';
import './drinks.css';



class DrinksIndexItem extends React.Component {

    render() {
        const { drink } = this.props;
        return (
           
                <div className="drink-list-item">
                    <Link className='drink-link' to={`/drinks/${drink.id}`}>
                        <div className="drink-pictures">
                            <img src={drink.imageUrl} className="drink-photo" alt="" />
                        </div>
                        
                        <div className='drink-info'>
                            <div className='drink-name-location'>
                                <div className='drink-name'>
                                    {drink.name.toUpperCase()}
                                </div>
                                
                                <div className='drink-location'>
                                    <i className="fas fa-map-marker-alt"></i> &nbsp;
                                    {drink.address}.
                                    <br />
                                    {drink.city}, {drink.state} {drink.zipCode}
                                </div>

                            </div>
                        </div>

                    </Link>
                </div>

        );
    }
}

export default DrinksIndexItem;