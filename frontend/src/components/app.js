import React from 'react';
import { AuthRoute } from '../util/route_util';
import { withRouter, Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Modal from '../components/modal/modal';
import './app.css';
import './reset.css';
import './foods/foods.css';
import MainPage from './main/main_page';
import FoodsIndexContainer from './foods/foods_index_container';
import FoodShowContainer from './foods/food_show/food_show_container';
import DrinksIndexContainer from './drinks/drinks_index_container';
import DrinkShowContainer from './drinks/drink_show/drink_show_container';
import DrinkWheel from './drinks/drink_mood_wheel';
import FoodFormContainer from './foods/food_form_container';
import FoodWheel from './foods/food_mood_wheel';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    let classy = ""
        if (this.props.location.pathname === '/drinkwheel' || this.props.location.pathname === '/drinks') {
        classy="bg"
    }
        if (this.props.location.pathname === '/foodwheel' || this.props.location.pathname === '/foods') {
            classy = "bg2"
        } 
    if (this.props.location.pathname === '/') {
        classy="app"
    }
    //please work//
    
    return(
    <div className={classy}>
        {/* <div className="bg"> */}
        <NavBarContainer />
        <Modal />
        <div className="main-body">
            <Switch>
                <Route path='/drinkwheel' component={DrinkWheel} />
                <Route path='/foodwheel' component={FoodWheel} />
                <Route exact path="/foods" component={FoodsIndexContainer} />
                <Route exact path="/foods/:foodId" component={FoodShowContainer} />

                {/* <Route exact path="/test" component={FoodWheel} /> */}

                <Route exact path="/drinks" component={DrinksIndexContainer} />
                <Route exact path="/drinks/:drinkId" component={DrinkShowContainer} />

                <Route exact path="/" component={MainPage} />
            </Switch>
        </div>
        </div>
    // </div>
    )

}};

export default withRouter(App);