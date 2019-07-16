import React from 'react';
import { withRouter } from 'react-router-dom';
import FoodsIndexItem from './foods_index_item';
import './foods.css'

class FoodsIndex extends React.Component {

    componentWillMount() {
        this.props.fetchFoods(this.props.location.search);
    }

    render() {

        if(this.props.foods === undefined) return null;
        
        const foods = this.props.foods.map(food => (
            <FoodsIndexItem
                key={food.id}
                food={food} />
        ));

        if (this.props.foods) {
            return (
                <div className='form-again'>
                    <h3>We were unable to find foods in your area that meet your cravings.</h3>
                    <button className='spin-again' onClick={() => this.props.history.push('/foodwheel')}>Please try again.</button>
                </div>
            )
        } else {
            return (
                <div className="foods-index-container">

                    <ul className="foods-ul">
                        {foods}
                    </ul>

                </div>
            );
        }
    }
}


export default withRouter(FoodsIndex);