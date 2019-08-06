import React from 'react';

//loading:

import LoadingIcon from '../../loading/loading_icon';
import '../../loading/loading.css';

class FoodShow extends React.Component{


    componentDidMount(){
        console.log(this.props.match);
        this.props.fetchFood(this.props.match.params.foodId);
    }

    render(){
        
        const { food } = this.props;
        console.log(this.props.food);
        if (food === undefined) return null;
        // if (this.props.loading) {
        //     return <LoadingIcon />
        // }
        // if (this.props.loading) {
        //     console.log('detail loading');
        //     return <LoadingIcon />
        // } else {
            console.log('i mounted!')
            return(
                <div className="food-show">
                    <p>{food.name}</p>
                    <p>{food.address}, {food.city}, {food.state} {food.zipCode}</p>
                    <p>{food.price}</p>
                    <div className="photo-rating">
                        <div className={`rating-static rating-${food.rating*10}`}>
                        </div>
                        <img src={this.props.food.imageUrl} className="food-photo" />
                    </div>
                    <img src={this.props.food.imageUrl} className="food-photo" alt=""/>
                </div>
            )

        // }

    }
}

export default FoodShow;