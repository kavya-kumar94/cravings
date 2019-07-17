import React from 'react';
import './main.css';
import FoodDrink from '../food_drink'


class MainPage extends React.Component {

    render() {
        return (
            <>
            <div className="main">
                <div className="fd">
                    <FoodDrink />
                </div>
            </div>

            {/* <div className="footer">
                hello
            </div> */}
            </>
        );
    }
}

export default MainPage;