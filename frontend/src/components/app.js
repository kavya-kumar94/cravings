import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
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

if()
const App = () => (
    <div className="app">
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

                <AuthRoute exact path="/" component={MainPage} />
            </Switch>
        </div>
        </div>
);

export default App;