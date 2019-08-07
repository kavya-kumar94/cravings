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

        // this.handleSubmit = this.handleSubmit.bind(this);
        this.check = this.check.bind(this);
        this.query = this.query.bind(this);
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     this.props.history.push({
    //         pathname: `/foods`,
            // search: `?sweet=${this.state.sweet}&spicy=${this.state.spicy}&salty=${this.state.salty}&savory=${this.state.savory}&hot=${this.state.hot}&cold=${this.state.cold}&healthy=${this.state.healthy}&junk=${this.state.junk}&happy=${this.state.happy}&sad=${this.state.sad}&hangry=${this.state.hangry}&sick=${this.state.sick}&celebratory=${this.state.celebratory}&stressed=${this.state.stressed}&adventurous=${this.state.adventurous}`
            // search: `?sweet=${this.state.sweet}`
    //     })

    // }

    

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
            pathname: '/foods',
            search: `?zipCodes[]=${this.state.zipCodes}&sweet=${this.state.sweet}&spicy=${this.state.spicy}&salty=${this.state.salty}&savory=${this.state.savory}&hot=${this.state.hot}&cold=${this.state.cold}&healthy=${this.state.healthy}&junk=${this.state.junk}&happy=${this.state.happy}&sad=${this.state.sad}&hangry=${this.state.hangry}&sick=${this.state.sick}&celebratory=${this.state.celebratory}&stressed=${this.state.stressed}&adventurous=${this.state.adventurous}`
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
                <form className="food-form" onSubmit={this.query} >
                    <div id="food-choosings">
    
                        <div className="choose-food-moods">
                        <h2>Choose your food moods!</h2>
                        <div className="sweet">
                            <input type="checkbox" id="sweet" onClick={this.check('sweet')} value={!this.state.sweet} />
                            <label for="sweet">Sweet</label>
                        </div>
                        <div className="spicy">
                            <input type="checkbox" id="spicy" onClick={this.check('spicy')} value={!this.state.spicy} />
                            <label for="spicy">Spicy</label>
                        </div>
                        <div className="salty">
                            <input type="checkbox" id="salty" onClick={this.check('salty')} value={!this.state.salty} />
                            <label for="salty">Salty</label>
                        </div>
                        <div className="savory">
                            <input type="checkbox" id="savory" onClick={this.check('savory')} value={!this.state.savory} />
                            <label for="savory">Savory</label>
                        </div>
                        <div className="hot">
                            <input type="checkbox" id="hot" onClick={this.check('hot')} value={!this.state.hot}/>
                            <label for="hot">Hot</label>
                        </div>
                        <div className="cold">
                            <input type="checkbox" id="cold" onClick={this.check('cold')} value={!this.state.cold}/>
                            <label for="cold">Cold</label>
                        </div>
                        <div className="healthy">
                            <input type="checkbox" id="healthy" onClick={this.check('healthy')} value={!this.state.healthy}/>
                            <label for="healthy">Healthy</label>
                        </div>
                        <div className="junk">
                            <input type="checkbox" id="junk" onClick={this.check('junk')} value={!this.state.junk}/>
                            <label for="junk">Junk</label>
                        </div>
                        <div className="happy">
                            <input type="checkbox" id="happy" onClick={this.check('happy')} value={!this.state.happy}/>
                            <label for="happy">Happy</label>
                        </div>
                        <div className="sad">
                            <input type="checkbox" id="sad" onClick={this.check('sad')} value={!this.state.sad}/>
                            <label for="sad">Sad</label>
                        </div>
                        <div className="hangry">
                            <input type="checkbox" id="hangry" onClick={this.check('hangry')} value={!this.state.hangry}/>
                            <label for="hangry">Hangry</label>
                        </div>
                        <div className="sick">
                            <input type="checkbox" id="sick" onClick={this.check('sick')} value={!this.state.sick}/>
                            <label for="sick">Sick</label>
                        </div>
                        <div className="celebratory">
                            <input type="checkbox" id="celebratory" onClick={this.check('celebratory')} value={!this.state.celebratory}/>
                            <label for="celebratory">Celebratory</label>
                        </div>
                        <div className="stressed">
                            <input type="checkbox" id="stressed" onClick={this.check('stressed')} value={!this.state.stressed}/>
                            <label for="stressed">Stressed</label>
                        </div>
                        <div className="adventurous">
                            <input type="checkbox" id="adventurous" onClick={this.check('adventurous')} value={!this.state.adventurous}/>
                            <label for="adventurous">Adventurous</label>
                        </div>
                    </div>


                        <div className="choose-locations">
                            <h2>Choose locations!</h2>
                            <div className="chinaTown">
                                <input type="checkbox" id="chinaTown" onClick={this.check('chinaTown')} value={!this.state.chinaTown} />
                                <label for="chinaTown">Chinatown</label>
                            </div>
                            <div className="eastBay">
                                <input type="checkbox" id="eastBay" onClick={this.check('eastBay')} value={!this.state.eastBay} />
                                <label for="eastBay">East Bay</label>
                            </div>
                            <div className="fidi">
                                <input type="checkbox" id="fidi" onClick={this.check('fidi')} value={!this.state.fidi} />
                                <label for="fidi">Financial District</label>
                            </div>
                            <div className="mission">
                                <input type="checkbox" id="mission" onClick={this.check('mission')} value={!this.state.mission} />
                                <label for="mission">Mission District</label>
                            </div>
                            <div className="noeValley">
                                <input type="checkbox" id="noeValley" onClick={this.check('noeValley')} value={!this.state.noeValley} />
                                <label for="noeValley">Noe Valley</label>
                            </div>
                            <div className="nb">
                                <input type="checkbox" id="nb" onClick={this.check('nb')} value={!this.state.nb} />
                                <label for="nb">North Beach</label>
                            </div>
                            <div className="presidio">
                                <input type="checkbox" id="presidio" onClick={this.check('presidio')} value={!this.state.presidio} />
                                <label for="presidio">Presidio</label>
                            </div>
                            <div className="soma">
                                <input type="checkbox" id="soma" onClick={this.check('soma')} value={!this.state.soma} />
                                <label for="soma">SOMA</label>
                            </div>
                            <div className="sunset">
                                <input type="checkbox" id="sunset" onClick={this.check('sunset')} value={!this.state.sunset} />
                                <label for="sunset">Sunset</label>
                            </div>

                        </div>

                    </div>
                    <div className="foodform-btn-container">
                        <input type="submit" className="foodform-btn" value="Find my food!"/>
                    </div>
                </form>
            </div>
        )
    }

}

export default withRouter(FoodForm);