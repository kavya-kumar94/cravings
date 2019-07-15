import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Modal from '../components/modal/modal';
import './app.css'
import './reset.css'
import MainPage from './main/main_page';
import FoodsContainer from './foods/foods_container';
import FoodWheel from './foods/food_mood_wheel';

const App = () => (
    <div className="app">
        <NavBarContainer />
        <Modal />
        <Switch>
            {/* <Route exact> */}
            <AuthRoute exact path="/" component={MainPage} />
            <Route exact path="/foodwheel" component={FoodWheel} />
            <Route exact path="/foods" component={FoodsContainer} />
        </Switch>
    </div>
);

export default App;