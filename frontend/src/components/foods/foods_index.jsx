import React from 'react';
import { withRouter } from 'react-router-dom';
import FoodsIndexItem from './foods_index_item';
import './foods.css'

class FoodsIndex extends React.Component {

    componentWillMount() {
        this.props.fetchFoods(this.props.location.search);
    }

    render() {

        console.log('this is location search Food index');
        console.log(this.props.location.search);

        if(this.props.foods === undefined) return null;
        
        const foods = this.props.foods.map(food => (
            <FoodsIndexItem
                key={food.id}
                food={food} />
        ));

        return (
            <div className="foods-index-container">

                <ul className="foods-ul">
                    {foods}
                </ul>

            </div>
        );
    }
}


export default withRouter(FoodsIndex);