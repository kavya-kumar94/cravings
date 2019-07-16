import React from 'react';
import './foods.css'
import { Link } from 'react-router-dom';

class FoodsIndexItem extends React.Component {

    render() {
        const { food } = this.props;
        return (
            <div className='food-list-items'>
                <div className='food-pictures'>
                    <img src={this.props.food.imageUrl} className="food-photo" alt="pic"/>
                </div>

                <Link className='food-info' to={`/foods/${food.id}`}>
                    <div className='food-name-tent'>
                        <div className='food-name'>
                            {food.name} 
                        </div>
                    </div>
                    <div className='food-location'>
                        {food.address},{food.city},{food.state},{food.zipCode}
                    </div>
                    <div className='extra-food-info'>
                        <div className='food-price'>
                            {food.price}
                        </div>
                    </div>
                </Link>
            </div>
           
        );
    }
}

export default FoodsIndexItem;