import React from 'react';
import './foods.css'
import { Link } from 'react-router-dom';

class FoodsIndexItem extends React.Component {

    render() {
        
        const { food } = this.props;
        return (
            
            <div className='food-list-item'>
                <Link className='food-link' to={`/foods/${food.id}`}>
                    <div className='food-pictures'>
                        <img src={food.imageUrl} className="food-photo" alt="pic"/>
                    </div>

                    <div className='food-info'>
                
                        <div className='food-name-location'>
                            <div className='food-name'>
                                {food.name.toUpperCase()} 
                            </div>
                            
                            <div className='food-location'>
                                <i className="fas fa-map-marker-alt"></i> &nbsp;
                                {food.address}.
                                <br />
                                {food.city}, {food.state} {food.zipCode}
                            </div>
                        
                        </div>
                    
                    </div>
                </Link>
            </div>
            
        );
    }
}

export default FoodsIndexItem;