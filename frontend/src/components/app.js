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
import DrinksIndexContainer from './drinks/drinks_index_container';
import FoodWheel from './foods/food_mood_wheel';

const App = () => (
    <div className="app">
        <NavBarContainer />
        <Modal />
        <Switch>
            <Route exact path="/foodwheel" component={FoodWheel} />
            <Route exact path="/foods" component={FoodsIndexContainer} />
            <Route exact path="/" component={MainPage} />
            {/* <AuthRoute exact path="/" component={MainPage} /> */}
            <Route exact path="/drinks" component={DrinksIndexContainer} />
            <AuthRoute exact path="/" component={MainPage} />
        </Switch>
    </div>
);

export default App;