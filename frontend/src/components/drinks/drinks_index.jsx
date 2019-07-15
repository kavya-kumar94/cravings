import React from 'react';
import { withRouter } from 'react-router-dom';
import DrinksIndexItem from './drinks_index_item';
import './drinks.css';

class Drinks extends React.Component {

    componentWillMount() {
        this.props.fetchDrinks();
    }

    render() {

        if (this.props.drinks === undefined) return null;

        const drinks = this.props.drinks.map(drink => (
            <DrinksIndexItem
                key={drink.id}
                drink={drink} />
        ));

        return (
            <div className="drinks-index-container">

                <ul className="drinks-ul">
                    {drinks}
                </ul>

            </div>
        );
    }
    
}

export default withRouter(Drinks);