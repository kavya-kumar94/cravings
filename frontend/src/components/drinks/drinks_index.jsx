import React from 'react';
import { withRouter } from 'react-router-dom';
import DrinksIndexItem from './drinks_index_item';
import './drinks.css';
import queryString from 'query-string';


class Drinks extends React.Component {

    componentWillMount() {
        // const parsed = queryString.parse(this.props.location.search);
        this.props.fetchDrinks(this.props.location.search);
    }

    render() {

        console.log('this is the location.search in drinks index')
        console.log(this.props.location.search);

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