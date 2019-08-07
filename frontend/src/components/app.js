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
import DrinkWheel from './drinks/drink_mood_wheel';
import FoodFormContainer from './foods/food_form_container';
import FoodWheel from './foods/food_mood_wheel';
import DrinkMoodFormContainer from './drinks/drink_mood_form_container';

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
    let classy = ""
    let newclass = ""
        if (this.props.location.pathname.indexOf("/foods/") === 0) {
            classy = "nobg"
        } else if (this.props.location.pathname.indexOf("/food") === 0 ) {
            classy = "bg2"
        } 

        if (this.props.location.pathname.indexOf("/drinks/") === 0) {
            classy = "nobg"
        } else if (this.props.location.pathname.indexOf("/drink") === 0 ) {
            classy="bg"
        } 
    if (this.props.location.pathname === '/') {
        newclass="app"
    }
    
    //please work//
    
    return(
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
            </Switch>
        </div>
     </div>
    )

}};

export default withRouter(App);