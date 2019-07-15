import React from 'react';


class FoodShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchFood(this.props.match.params.foodId)
    }

    render(){

        if (this.props.food === undefined) return null;

        return(
            <div>
                Show Page
            </div>
        )
    }
}

export default FoodShow;