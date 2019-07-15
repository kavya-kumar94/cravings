import React from 'react';
import { withRouter } from 'react-router-dom';
import DrinksIndexItem from './drinks_index_item';
import NavBarIndexContainer from '../nav/navbar_container';
import './drinks.css'

class Drinks extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchDrinks();
    }

    render() {

        const drinks = this.props.drinks.map(drink => (
            <DrinksIndexItem
                key={drink.id}
                drink={drink} />
        ));

        return (
            <div className="drinks-index-container">

                <div>
                    <NavBarIndexContainer />
                </div>

                <div className="drinks-ul">
                    <ul>{drinks}</ul>
                </div>

            </div>
        );
        }
    }
}

export default withRouter(Drinks);