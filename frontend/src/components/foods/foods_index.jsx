import React from 'react';
import { withRouter } from 'react-router-dom';
import FoodsIndexItem from './foods_index_item';
import NavBarIndexContainer from '../nav/navbar_container';
import './foods.css'

class FoodsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchFoods();
    }

    render() {

        const foods = this.props.foods.map(food => (
            <FoodsIndexItem
                key={food.id}
                food={food} />
        ));

        return (
            <div className="foods-index-container">

                <div>
                    <NavBarIndexContainer />
                </div>

                <div className="foods-ul">
                    <ul>{foods}</ul>
                </div>

            </div>
        );
    }
}


export default withRouter(FoodsIndex);