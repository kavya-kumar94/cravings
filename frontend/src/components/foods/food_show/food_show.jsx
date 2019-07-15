


class FoodShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchFood(this.props.match.params.foodId)
    }
}