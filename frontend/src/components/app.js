import React from 'react';
// import { AuthRoute } from '../util/route_util';
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
// eslint-disable-next-line
import DrinkWheel from './drinks/drink_mood_wheel';
import FoodFormContainer from './foods/food_form_container';
// eslint-disable-next-line
import FoodWheel from './foods/food_mood_wheel';
import WaitingRoomContainer from './multi_user/waiting_room_container';
import DrinkMoodFormContainer from './drinks/drink_mood_form_container';
import LobbyContainer from './multi_user/lobby_container';
import SaveIndex from './saves/save_index';


class App extends React.Component {


    render() {
        let classy = "";
        let newclass = "";

        if (this.props.location.pathname.indexOf("/food") === 0) {
            classy = "bg2"
        }
        if (this.props.location.pathname.indexOf("/drink") === 0) {
            classy = "bg"
        }
        if (this.props.location.pathname === '/') {
            newclass = "app"
        }

        return (
            <div className={newclass}>
                <div className={classy}></div>
                <NavBarContainer />
                <Modal />
                <div className="main-body">
                    <Switch>
                        <Route path='/drinkform' component={DrinkMoodFormContainer} />
                        <Route path='/foodform' component={FoodFormContainer} />
                        <Route exact path="/foods" component={FoodsIndexContainer} />
                        <Route exact path="/foods/:foodId" component={FoodShowContainer} />

                        <Route exact path="/drinks" component={DrinksIndexContainer} />
                        <Route exact path="/drinks/:drinkId" component={DrinkShowContainer} />

                        <Route exact path="/" component={MainPage} />
                        <Route exact path="/lobby" component={LobbyContainer} />
                        <Route exact path="/lobby/:roomId" component={WaitingRoomContainer} />
                    </Switch>
                </div>
            </div>
        )
    }
};

export default withRouter(App);