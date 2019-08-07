import React from 'react';
import { withRouter } from 'react-router-dom';
import DrinksIndexItem from './drinks_index_item';
import './drinks.css';


class DrinksIndex extends React.Component {

    constructor(props) {
        super(props);
        
        this.randomizer = this.randomizer.bind(this);
    }

    componentWillMount() {
        this.props.fetchDrinks(this.props.location.search);
    }

    randomizer() {
        let num_choices = this.props.drinks.length;
        let choiceIdx = Math.floor(Math.random() * Math.floor(num_choices));
        let drinkId = this.props.drinks[choiceIdx].id;
        this.props.history.push(`/drinks/${drinkId}`);
    }

    render() {

        if (this.props.drinks === undefined) {
            return null;
        } else if (Object.keys(this.props.drinks).length === 0) {
            return (
                <div className='drinks-index-container'>
                    <div className='no-results-for-drink'>
                        <h3>We were unable to find drinks in your area that meet your cravings.</h3>
                        <button className='spin-again' onClick={() => this.props.history.push('/drinkform')}>Please try again.</button>
                    </div>
                </div>
            )
        } else {
            const drinks = this.props.drinks.map(drink => (
                <DrinksIndexItem
                    key={drink.id}
                    drink={drink} />
            ));

            return (
                <div className="drinks-index-container">
                    <button className='pick-one' onClick={() => this.randomizer()}>
                        Pick for me, I am indecisive
                    </button>

                    <ul className="drinks-ul">
                        {drinks}
                    </ul>


                </div>
            );
        }
    }
    
}

export default withRouter(DrinksIndex);