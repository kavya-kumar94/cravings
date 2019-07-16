import React from 'react';
import './main.css';
import PieChart from '../../components/foods/food_mood_wheel'
import FoodDrink from '../food_drink'


class MainPage extends React.Component {

    render() {
        return (
            <div className="main">
                <h1>Cravings</h1>
                <h2>FIND A RESTAURANT FOR EVERY MOOD</h2>
                <div className="fd">
                    <FoodDrink />
                </div>
                {/* <div>
                    <PieChart />
                </div> */}
                {/* <footer>
                    We are live!! React not broken, Everything is fine
                </footer> */}
            </div>
        );
    }
}

export default MainPage;