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
            sunset: false,
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
            zipCodes: []
        };
        this.regions = {
            chinaTown: [94108],
            eastBay: [94130, 94501, 94618],
            fidi: [94104, 94105],
            mission: [94107, 94110,94117, 94124],
            noeValley: [94114, 94127],
            nb: [94109, 94133],
            presidio: [94115, 94118],
            soma: [94102, 94103],
            sunset: [94122, 94132, 94116]
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
        this.query = this.query.bind(this);
        this.getRegions = this.getRegions.bind(this);
    }

    query(e) {
        e.preventDefault();
        Object.keys(this.state).forEach(key => {
            if (this.state[key] === true && Object.keys(this.regions).includes(key)) {
                this.setState({
                    zipCodes: this.state.zipCodes.push(this.regions[key])
                })
            }
        })
        this.props.history.push({
            pathname: '/drinks',
            search: `?zipCodes[]=${this.state.zipCodes}&caffeine=${this.state.caffeine}&sweet=${this.state.sweet}&aromatic=${this.state.aromatic}&hot=${this.state.hot}&iced=${this.state.iced}&healthy=${this.state.healthy}&sad=${this.state.sad}&tired=${this.state.tired}&happy=${this.state.happy}&angry=${this.state.angry}&sick=${this.state.sick}&celebratory=${this.state.celebratory}&stressed=${this.state.stressed}&adventurous=${this.state.adventurous}`
            // `?chinaTown=${this.state.chinaTown}&eastBay=${this.state.eastBay}&fidi=${this.state.fidi}&mission=${this.state.mission}&noeValley=${this.state.noeValley}&nb=${this.state.nb}&presidio=${this.state.presidio}&soma=${this.state.soma}&sunset=${this.state.sunset}`
        })
    }

    getRegions() {
        Object.keys(this.state).forEach(key => {
            if (this.state[key] === true) {
                this.setState({
                    zipCodes: this.state.zipCodes.concat(this.regions[key])
                })
            }
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
                <form className="drink-form" onSubmit={this.query}>
                    <div id="drink-choosings">

                        <div className="choose-drink-moods">
                            <h2>Choose your drink mood!</h2>
                            <div className="caffeine">
                                <input id="caffeine" onClick={this.toggle('caffeine')} value={!this.state.caffeine} type="checkbox" />
                                <label htmlFor="caffeine">Caffeine</label>
                            </div>
                            <div className="sweet">
                                <input id="sweet" onClick={this.toggle('sweet')} value={!this.state.sweet} type="checkbox" />
                                <label htmlFor="sweet">Sweet</label>
                            </div>
                            <div className="aromatic">
                                <input id="aromatic" onClick={this.toggle('aromatic')} value={!this.state.aromatic} type="checkbox" />
                                <label htmlFor="aromatic">Aromatic</label>
                            </div>
                            <div className="hot">
                                <input id="hot" onClick={this.toggle('hot')} value={!this.state.hot} type="checkbox" />
                                <label htmlFor="hot">Hot</label>
                            </div>
                            <div className="iced">
                                <input id="iced" onClick={this.toggle('iced')} value={!this.state.iced} type="checkbox" />
                                <label htmlFor="iced">Iced</label>
                            </div>
                            <div className="healthy">
                                <input id="healthy" onClick={this.toggle('healthy')} value={!this.state.healthy} type="checkbox" />
                                <label htmlFor="healthy">Healthy</label>
                            </div>
                            <div className="sad">
                                <input id="sad" onClick={this.toggle('sad')} value={!this.state.sad} type="checkbox" />
                                <label htmlFor="sad">Sad</label>
                            </div>
                            <div className="tired">
                                <input id="tired" onClick={this.toggle('tired')} value={!this.state.tired} type="checkbox" />
                                <label htmlFor="tired">Tired</label>
                            </div>
                            <div className="happy">
                                <input id="happy" onClick={this.toggle('happy')} value={!this.state.happy} type="checkbox" />
                                <label htmlFor="happy">Happy</label>
                            </div>
                            <div className="angry">
                                <input id="angry" onClick={this.toggle('angry')} value={!this.state.angry} type="checkbox"/>
                                <label htmlFor="angry">Angry</label>
                            </div>
                            <div className="sick">
                                <input id="sick" onClick={this.toggle('sick')} value={!this.state.sick} type="checkbox"/>
                                <label htmlFor="sick">Sick</label>
                            </div>
                            <div className="celebratory">
                                <input id="celebratory" onClick={this.toggle('celebratory')} value={!this.state.celebratory} type="checkbox"/>
                                <label htmlFor="celebratory">Celebratory</label>
                            </div>
                            <div className="stressed">
                                <input id="stressed" onClick={this.toggle('stressed')} value={!this.state.stressed} type="checkbox"/>
                                <label htmlFor="stressed">Stressed</label>
                            </div>
                            <div className="adventurous">
                                <input id="adventurous" onClick={this.toggle('adventurous')} value={!this.state.adventurous} type="checkbox"/>
                                <label htmlFor="adventurous">Adventurous</label>
                            </div>
                        </div>

                        <div className="choose-locations">

                            <h2>Choose locations!</h2>
                            <div className="chinaTown">
                                <input id="chinaTown" onClick={this.toggle('chinaTown')} value={!this.state.chinaTown} type="checkbox" />
                                <label htmlFor="chinaTown">Chinatown</label>
                            </div>
                            <div className="eastBay">
                                <input id="eastBay" onClick={this.toggle('eastBay')} value={!this.state.eastBay} type="checkbox" />
                                <label htmlFor="eastBay">East Bay</label>
                            </div>
                            <div className="fidi">
                                <input id="fidi" onClick={this.toggle('fidi')} value={!this.state.fidi} type="checkbox" />
                                <label htmlFor="fidi">Financial District</label>
                            </div>
                            <div className="mission">
                                <input id="mission" onClick={this.toggle('mission')} value={!this.state.mission} type="checkbox" />
                                <label htmlFor="mission">Mission District</label>
                            </div>
                            <div className="noeValley">
                                <input id="noeValley" onClick={this.toggle('noeValley')} value={!this.state.noeValley} type="checkbox" />
                                <label htmlFor="noeValley">Noe Valley</label>
                            </div>
                            <div className="nb">
                                <input id="nb" onClick={this.toggle('nb')} value={!this.state.nb} type="checkbox" />
                                <label htmlFor="nb">North Beach</label>
                            </div>
                            <div className="presidio">
                                <input id="presidio" onClick={this.toggle('presidio')} value={!this.state.presidio} type="checkbox" />
                                <label htmlFor="presidio">Presidio</label>
                            </div>
                            <div className="soma">
                                <input id="soma" onClick={this.toggle('soma')} value={!this.state.soma} type="checkbox" />
                                <label htmlFor="soma">SOMA</label>
                            </div>
                            <div className="sunset">
                                <input id="sunset" onClick={this.toggle('sunset')} value={!this.state.sunset} type="checkbox" />
                                <label htmlFor="sunset">Sunset District</label>
                            </div>
                        </div>
                    </div>

                    <div className="drinkform-btn-container">
                        <input type="submit" className="drinkform-btn" value="Find my drink!" />
                    </div>
                </form>
            </div>
        )
    }

}

export default withRouter(DrinkForm);