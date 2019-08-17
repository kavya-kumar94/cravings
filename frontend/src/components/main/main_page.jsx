import React from 'react';
import './main.css';
import FoodDrink from '../food_drink'


class MainPage extends React.Component {

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.props.history.push('/lobby');
    }

    render() {
        return (
            <div className="main-splash">
                <div className="main-logo"></div>
                <FoodDrink />
            </div>

        );
    }
}

export default MainPage;