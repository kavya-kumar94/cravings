import React from 'react';
import './main.css';
import FoodDrink from '../food_drink';


class MainPage extends React.Component {

    render() {
        return (
            <div className="main">
                <span className="cravings-logo"></span>
                <h2>FIND A RESTAURANT FOR EVERY MOOD</h2>
                <div className="fd">
                    <FoodDrink />
                </div>
            </div>
        );
    }
}

export default MainPage;