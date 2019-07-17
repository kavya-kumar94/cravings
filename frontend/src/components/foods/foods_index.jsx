import React from 'react';
import { withRouter } from 'react-router-dom';
import FoodsIndexItem from './foods_index_item';
import './foods.css'

class FoodsIndex extends React.Component {
    constructor(props){
        super(props);
        this.randomizer = this.randomizer.bind(this);
    }

    componentWillMount() {
        this.props.fetchFoods(this.props.location.search);
    }

    randomizer() {
        let num_choices = this.props.foods.length;
        let choiceIdx = Math.floor(Math.random() * Math.floor(num_choices));
        let foodId = this.props.foods[choiceIdx].id;
        this.props.history.push(`/foods/${foodId}`);
    }

    render() {


        if (this.props.foods === undefined) {
            return null;
        } else if (Object.keys(this.props.foods).length === 0) {
            return (
                <div className='foods-index-container'>
                    <div className='no-results-for-food'>
                        <h3>We were unable to find foods in your area that meet your cravings.</h3>
                        <button className='spin-again' onClick={() => this.props.history.push('/foodwheel')}>Please try again.</button>
                    </div>
                </div>
            )
        } else {
            const foods = this.props.foods.map(food => (
                <FoodsIndexItem
                    key={food.id}
                    food={food} />
            ));

            return (
                <div className="foods-index-container">
                    
                    <button className='pick-one' onClick={() => this.randomizer()}>
                        Pick for me, I am indecisive
                    </button>

                    <ul className="foods-ul">
                        {foods}
                    </ul>


                </div>
            );
        }


    }
}


export default withRouter(FoodsIndex);