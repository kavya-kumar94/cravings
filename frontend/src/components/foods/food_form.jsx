import React from 'react';
import { withRouter } from 'react-router-dom';
import './food_form.css';

class FoodForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sweet: false,
            spicy: false,
            salty: false,
            savory: false,
            hot: false,
            cold: false,
            healthy: false,
            junk: false,
            sad: false,
            happy: false,
            hangry: false,
            sick: false,
            celebratory: false,
            stressed: false,
            adventurous: false,
            chinaTown: false,
            eastBay: false,
            fidi: false,
            mission: false,
            noeValley: false,
            nb: false,
            presidio: false,
            soma: false,
            sunset: false,
            zipCodes: []
        };

        this.regions = {
            chinaTown: [94108],
            eastBay: [94608],
            fidi: [94104,94111,94105],
            mission: [94110, 94117, 94112],
            noeValley: [94114, 94127],
            nb: [94109, 94133],
            presidio: [94123,94115, 94118,94121],
            soma: [94102, 94103],
            sunset: [94122, 94132, 94116]
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.check = this.check.bind(this);
        this.query = this.query.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push({
            pathname: `/foods`,
            // search: `?sweet=${this.state.sweet}&spicy=${this.state.spicy}&salty=${this.state.salty}&savory=${this.state.savory}&hot=${this.state.hot}&cold=${this.state.cold}&healthy=${this.state.healthy}&junk=${this.state.junk}&happy=${this.state.happy}&sad=${this.state.sad}&hangry=${this.state.hangry}&sick=${this.state.sick}&celebratory=${this.state.celebratory}&stressed=${this.state.stressed}&adventurous=${this.state.adventurous}`
            // search: `?sweet=${this.state.sweet}`
        })

    }

    

    query(e) {
        e.preventDefault();

        // console.log(this.state);
        Object.keys(this.state).forEach(key => {
            if (this.state[key] === true && Object.keys(this.regions).includes(key)) {
                this.setState({
                    zipCodes: this.state.zipCodes.push(this.regions[key])
                })
            }
        })
        this.props.history.push({
            pathname: '/foods',
            search: `?zipCodes[]=${this.state.zipCodes}&sweet=${this.state.sweet}&spicy=${this.state.spicy}&salty=${this.state.salty}&savory=${this.state.savory}&hot=${this.state.hot}&cold=${this.state.cold}&healthy=${this.state.healthy}&junk=${this.state.junk}&happy=${this.state.happy}&sad=${this.state.sad}&hangry=${this.state.hangry}&sick=${this.state.sick}&celebratory=${this.state.celebratory}&stressed=${this.state.stressed}&adventurous=${this.state.adventurous}`
                // `?chinaTown=${this.state.chinaTown}&eastBay=${this.state.eastBay}&fidi=${this.state.fidi}&mission=${this.state.mission}&noeValley=${this.state.noeValley}&nb=${this.state.nb}&presidio=${this.state.presidio}&soma=${this.state.soma}&sunset=${this.state.sunset}`
        })
    }

    check(field){
        return e => this.setState({
            [field]: !!e.target.checked
        });
    }
    render() {
        return (
            <div className="foodform">
                <h2>Choose your food mood</h2>
                <form className="food-form" onSubmit={this.query} >
                    <div className="chinaTown">
                        <input type="checkbox" onClick={this.check('chinaTown')} value={!this.state.chinaTown} />
                        <label>Chinatown</label>
                    </div>
                    <div className="eastBay">
                        <input type="checkbox" onClick={this.check('eastBay')} value={!this.state.eastBay}/>
                        <label>East Bay</label>
                    </div>
                    <div className="fidi">
                        <input type="checkbox" onClick={this.check('fidi')} value={!this.state.fidi}/>
                        <label>Financial District</label>
                    </div>
                    <div className="mission">
                        <input type="checkbox" onClick={this.check('mission')} value={!this.state.mission}/>
                        <label>Mission District</label>
                    </div>
                    <div className="noeValley">
                        <input type="checkbox" onClick={this.check('noeValley')} value={!this.state.noeValley}/>
                        <label>Noe Valley</label>
                    </div>
                    <div className="nb">
                        <input type="checkbox" onClick={this.check('nb')} value={!this.state.nb}/>
                        <label>North Beach</label>
                    </div>
                    <div className="presidio">
                        <input type="checkbox" onClick={this.check('presidio')} value={!this.state.presidio}/>
                        <label>Presidio</label>
                    </div>
                    <div className="soma">
                        <input type="checkbox" onClick={this.check('soma')} value={!this.state.soma}/>
                        <label>SOMA</label>
                    </div>
                    <div className="sunset">
                        <input type="checkbox" onClick={this.check('sunset')} value={!this.state.sunset}/>
                        <label>Sunset</label>
                    </div>
                    <div className="sweet">
                        <input type="checkbox" onClick={this.check('sweet')} value={!this.state.sweet} />
                        <label>Sweet</label>
                    </div>
                    <div className="spicy">
                        <input type="checkbox" onClick={this.check('spicy')} value={!this.state.spicy} />
                        <label>Spicy</label>
                    </div>
                    <div className="salty">
                        <input type="checkbox" onClick={this.check('salty')} value={!this.state.salty} />
                        <label>Salty</label>
                    </div>
                    <div className="savory">
                        <input type="checkbox" onClick={this.check('savory')} value={!this.state.savory} />
                        <label>Savory</label>
                    </div>
                    <div className="hot">
                        <input type="checkbox" onClick={this.check('hot')} value={!this.state.hot}/>
                        <label>Hot</label>
                    </div>
                    <div className="cold">
                        <input type="checkbox" onClick={this.check('cold')} value={!this.state.cold}/>
                        <label>Cold</label>
                    </div>
                    <div className="healthy">
                        <input type="checkbox" onClick={this.check('healthy')} value={!this.state.healthy}/>
                        <label>Healthy</label>
                    </div>
                    <div className="junk">
                        <input type="checkbox" onClick={this.check('junk')} value={!this.state.junk}/>
                        <label>Junk</label>
                    </div>
                    <div className="happy">
                        <input type="checkbox" onClick={this.check('happy')} value={!this.state.happy}/>
                        <label>Happy</label>
                    </div>
                    <div className="sad">
                        <input type="checkbox" onClick={this.check('sad')} value={!this.state.sad}/>
                        <label>Sad</label>
                    </div>
                    <div className="hangry">
                        <input type="checkbox" onClick={this.check('hangry')} value={!this.state.hangry}/>
                        <label>Hangry</label>
                    </div>
                    <div className="sick">
                        <input type="checkbox" onClick={this.check('sick')} value={!this.state.sick}/>
                        <label>Sick</label>
                    </div>
                    <div className="celebratory">
                        <input type="checkbox" onClick={this.check('celebratory')} value={!this.state.celebratory}/>
                        <label>Celebratory</label>
                    </div>
                    <div className="stressed">
                        <input type="checkbox" onClick={this.check('stressed')} value={!this.state.stressed}/>
                        <label>Stressed</label>
                    </div>
                    <div className="adventurous">
                        <input type="checkbox" onClick={this.check('adventurous')} value={!this.state.adventurous}/>
                        <label>Adventurous</label>
                    </div>
                    <input type="submit" className="foodform-btn" value="Find my food!"/>
                </form>
            </div>
        )
    }

}

export default withRouter(FoodForm);