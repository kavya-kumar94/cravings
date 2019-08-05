import React from 'react';
import { withRouter } from 'react-router-dom';
import './drink_mood_form.css'

class DrinkForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chinaTown: false,
            eastBay: false,
            fidi: false,
            mission: false,
            noeValley: false,
            nb: false,
            presidio: false,
            soma: false,
            sunset: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
        this.query = this.query.bind(this);
    }

    query(e) {
        e.preventDefault();
        // console.log(this.state);
        this.props.history.push({
            pathname: '/drinks',
            search: `?chinaTown=${this.state.chinaTown}&eastBay=${this.state.eastBay}&fidi=${this.state.fidi}&mission=${this.state.mission}&noeValley=${this.state.noeValley}&nb=${this.state.nb}&presidio=${this.state.presidio}&soma=${this.state.soma}&sunset=${this.state.sunset}`
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push({
            pathname: '/drinks',
            // search: `?caffeine=${this.state.caffeine}&sweet=${this.state.sweet}&aromatic=${this.state.aromatic}&hot=${this.state.hot}&iced=${this.state.iced}&healthy=${this.state.healthy}&sad=${this.state.sad}&tired=${this.state.tired}&happy=${this.state.happy}&angry=${this.state.angry}&sick=${this.state.sick}&celebratory=${this.state.celebratory}&stressed=${this.state.stressed}&adventurous=${this.state.adventurous}`
            search: `?caffeine=${this.state.caffeine}`
        })
    }

    toggle(field) {
        return e => 
        this.setState({[field]: !!e.target.checked})
    }

    render() {
        return(
            <div className="drinkform">
                <h2>Choose your drink locations!</h2>
                <form className="drink-form" onSubmit={this.query}>
                    <div className="chinaTown">
                        <input onClick={this.toggle('chinaTown')} value={!this.state.chinaTown} type="checkbox"/>
                        <label>Chinatown</label>
                    </div>
                    <div className="eastBay">
                        <input onClick={this.toggle('eastBay')} value={!this.state.eastBay} type="checkbox"/>
                        <label>East Bay</label>
                    </div>
                    <div className="fidi">
                        <input onClick={this.toggle('fidi')} value={!this.state.fidi} type="checkbox"/>
                        <label>Financial District</label>
                    </div>
                    <div className="mission">
                        <input onClick={this.toggle('mission')} value={!this.state.mission} type="checkbox"/>
                        <label>Mission District</label>
                    </div>
                    <div className="noeValley">
                        <input onClick={this.toggle('noeValley')} value={!this.state.noeValley} type="checkbox"/>
                        <label>Noe Valley</label>
                    </div>
                    <div className="nb">
                        <input onClick={this.toggle('nb')} value={!this.state.nb} type="checkbox"/>
                        <label>North Beach</label>
                    </div>
                    <div className="presidio">
                        <input onClick={this.toggle('presidio')} value={!this.state.presidio} type="checkbox"/>
                        <label>Presidio</label>
                    </div>
                    <div className="soma">
                        <input onClick={this.toggle('soma')} value={!this.state.soma} type="checkbox"/>
                        <label>SOMA</label>
                    </div>
                    <div className="sunset">
                        <input onClick={this.toggle('sunset')} value={!this.state.sunset} type="checkbox"/>
                        <label>Sunset District</label>
                    </div>
                    {/* <div className="angry">
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
                    </div> */}
                    <input type="submit" className="drinkform-btn" value="Find my drink!"/>
                </form>
            </div>
        )
    }

}

export default withRouter(DrinkForm);