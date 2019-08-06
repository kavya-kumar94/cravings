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
            <>
            <div className="main">
                <div className="fd">
                    <FoodDrink />
                </div>
            </div>

                <button onClick={this.handleClick}>go to lobby</button>
            </>
        );
    }
}

export default MainPage;