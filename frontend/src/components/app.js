import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Modal from '../components/modal/modal';

import MainPage from './main/main_page';
import FoodsContainer from './foods/foods_container';

const App = () => (
    <div>
        <NavBarContainer />
        <Modal />
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />

            <ProtectedRoute exact path="/foods" component={FoodsContainer} />
        </Switch>
    </div>
);

export default App;