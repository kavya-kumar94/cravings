import React from 'react';
import { withRouter } from 'react-router-dom';
import './drink_mood_form.css'
import queryString from 'query-string';

class DrinkForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            caffeine: false,
            sweet: false,
            aromatic: false,
            hot: false,
            iced: false,
            healthy: false,
            sad: false,
            tired: false,
            happy: false,
            angry: false,
            sick: false,
            celebratory: false,
            stressed: false,
            adventurous: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push({
            pathname: '/drinks',
            // search: `?caffeine=${this.state.caffeine}&sweet=${this.state.sweet}&aromatic=${this.state.aromatic}&hot=${this.state.hot}&iced=${this.state.iced}&healthy=${this.state.healthy}&sad=${this.state.sad}&tired=${this.state.tired}&happy=${this.state.happy}&angry=${this.state.angry}&sick=${this.state.sick}&celebratory=${this.state.celebratory}&stressed=${this.state.stressed}&adventurous=${this.state.adventurous}`
            search: `?caffeine=${this.state.caffeine}`
        })
        // console.log(this.state);

        // console.log('this is the location.search')
        // console.log(this.props.location);
        // const parsed = queryString.parse(this.props.location.search);
        // console.log(parsed);
        // this.props.fetchDrinks(this.props.location.search);
    }

    toggle(field) {
        return e => 
        this.setState({[field]: !!e.target.checked})
    }

    render() {
        return(
            <div className="drinkform">
                <h2>Choose your drink moods!</h2>
                <form className="drink-form" onSubmit={this.handleSubmit}>
                    <div className="caffeine">
                        <input onClick={this.toggle('caffeine')} value={!this.state.caffeine} type="checkbox"/>
                        <label>Caffeine</label>
                    </div>
                    <div className="sweet">
                        <input onClick={this.toggle('sweet')} value={!this.state.sweet} type="checkbox"/>
                        <label>Sweet</label>
                    </div>
                    <div className="aromatic">
                        <input onClick={this.toggle('aromatic')} value={!this.state.aromatic} type="checkbox"/>
                        <label>Aromatic</label>
                    </div>
                    <div className="hot">
                        <input onClick={this.toggle('hot')} value={!this.state.hot} type="checkbox"/>
                        <label>Hot</label>
                    </div>
                    <div className="iced">
                        <input onClick={this.toggle('iced')} value={!this.state.iced} type="checkbox"/>
                        <label>Iced</label>
                    </div>
                    <div className="healthy">
                        <input onClick={this.toggle('healthy')} value={!this.state.healthy} type="checkbox"/>
                        <label>Healthy</label>
                    </div>
                    <div className="sad">
                        <input onClick={this.toggle('sad')} value={!this.state.sad} type="checkbox"/>
                        <label>Sad</label>
                    </div>
                    <div className="tired">
                        <input onClick={this.toggle('tired')} value={!this.state.tired} type="checkbox"/>
                        <label>Tired</label>
                    </div>
                    <div className="happy">
                        <input onClick={this.toggle('happy')} value={!this.state.happy} type="checkbox"/>
                        <label>Happy</label>
                    </div>
                    <div className="angry">
                        <input onClick={this.toggle('angry')} value={!this.state.angry} type="checkbox"/>
                        <label>Angry</label>
                    </div>
                    <div className="sick">
                        <input onClick={this.toggle('sick')} value={!this.state.sick} type="checkbox"/>
                        <label>Sick</label>
                    </div>
                    <div className="celebratory">
                        <input onClick={this.toggle('celebratory')} value={!this.state.celebratory} type="checkbox"/>
                        <label>Celebratory</label>
                    </div>
                    <div className="stressed">
                        <input onClick={this.toggle('stressed')} value={!this.state.stressed} type="checkbox"/>
                        <label>Stressed</label>
                    </div>
                    <div className="adventurous">
                        <input onClick={this.toggle('adventurous')} value={!this.state.adventurous} type="checkbox"/>
                        <label>Adventurous</label>
                    </div>
                    <input type="submit" className="drinkform-btn" value="Find my drink!"/>
                </form>
            </div>
        )
    }

}

export default withRouter(DrinkForm);