import React from 'react';
import { withRouter } from 'react-router-dom';
import FoodsIndexItem from './foods_index_item';

class Foods extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     foods: []
        // }
    }

    componentWillMount() {
        this.props.fetchFoods();
    }

    // componentWillReceiveProps(newState) {
    //     this.setState({ foods: newState.foods });
    // }

    render() {
        const { foods } = this.props;
        if (foods.length === 0) {
            return (<div>No match found</div>)
        } else {
            return (
                <div>
                    <h2>We found these food restaurants for you:</h2>
                    {foods.map(food => (
                        <FoodsIndexItem key={food.id} food={food}/>
                    ))}
                </div>
            );
        }
    }
}

export default withRouter(Foods);