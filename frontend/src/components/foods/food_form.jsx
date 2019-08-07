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
                            <label>
                                <input type="checkbox" onClick={this.check('sweet')} value={!this.state.sweet} />
                            Sweet</label>
                            
                        </div>
                        <div className="spicy">
                            <label>
                                <input type="checkbox" onClick={this.check('spicy')} value={!this.state.spicy} />
                            Spicy</label>
                        </div>
                        <div className="salty">
                            <label>
                                <input type="checkbox" onClick={this.check('salty')} value={!this.state.salty} />
                            Salty</label>
                        </div>
                        <div className="savory">
                            <label>
                                <input type="checkbox" onClick={this.check('savory')} value={!this.state.savory} />
                            Savory</label>
                        </div>
                        <div className="hot">
                            <label>
                                <input type="checkbox" onClick={this.check('hot')} value={!this.state.hot}/>
                            Hot</label>
                        </div>
                        <div className="cold">
                            <label>
                                <input type="checkbox" onClick={this.check('cold')} value={!this.state.cold}/>
                            Cold</label>
                        </div>
                        <div className="healthy">
                            <label>
                                <input type="checkbox" onClick={this.check('healthy')} value={!this.state.healthy}/>
                            Healthy</label>
                        </div>
                        <div className="junk">
                            <label>
                                <input type="checkbox" onClick={this.check('junk')} value={!this.state.junk}/>
                            Junk</label>
                        </div>
                        <div className="happy">
                            <label>
                                <input type="checkbox" onClick={this.check('happy')} value={!this.state.happy}/>
                            Happy</label>
                        </div>
                        <div className="sad">
                            <label>
                                <input type="checkbox" onClick={this.check('sad')} value={!this.state.sad}/>
                            Sad</label>
                        </div>
                        <div className="hangry">
                            <label>
                                <input type="checkbox" onClick={this.check('hangry')} value={!this.state.hangry}/>
                            Hangry</label>
                        </div>
                        <div className="sick">
                            <label>
                                <input type="checkbox" onClick={this.check('sick')} value={!this.state.sick}/>
                            Sick</label>
                        </div>
                        <div className="celebratory">
                            <label>
                                <input type="checkbox" onClick={this.check('celebratory')} value={!this.state.celebratory}/>
                            Celebratory</label>
                        </div>
                        <div className="stressed">
                            <label>
                                <input type="checkbox" onClick={this.check('stressed')} value={!this.state.stressed}/>
                            Stressed</label>
                        </div>
                        <div className="adventurous">
                            <label>
                                <input type="checkbox" onClick={this.check('adventurous')} value={!this.state.adventurous}/>
                            Adventurous</label>
                        </div>
                    </div>


                        <div className="choose-locations">
                            <h2>Choose locations!</h2>
                            <div className="chinaTown">
                                <label>
                                    <input type="checkbox" onClick={this.check('chinaTown')} value={!this.state.chinaTown} />
                                Chinatown</label>
                            </div>
                            <div className="eastBay">
                                <label>
                                    <input type="checkbox" onClick={this.check('eastBay')} value={!this.state.eastBay} />
                                East Bay</label>
                            </div>
                            <div className="fidi">
                                <label>
                                    <input type="checkbox" onClick={this.check('fidi')} value={!this.state.fidi} />
                                Financial District</label>
                            </div>
                            <div className="mission">
                                <label>
                                    <input type="checkbox" onClick={this.check('mission')} value={!this.state.mission} />
                                Mission District</label>
                            </div>
                            <div className="noeValley">
                                <label>
                                    <input type="checkbox" onClick={this.check('noeValley')} value={!this.state.noeValley} />
                                Noe Valley</label>
                            </div>
                            <div className="nb">
                                <label>
                                    <input type="checkbox" onClick={this.check('nb')} value={!this.state.nb} />
                                North Beach</label>
                            </div>
                            <div className="presidio">
                                <label>
                                    <input type="checkbox" onClick={this.check('presidio')} value={!this.state.presidio} />
                                Presidio</label>
                            </div>
                            <div className="soma">
                                <label>
                                    <input type="checkbox" onClick={this.check('soma')} value={!this.state.soma} />
                                SOMA</label>
                            </div>
                            <div className="sunset">
                                <label>
                                    <input type="checkbox" onClick={this.check('sunset')} value={!this.state.sunset} />
                                Sunset</label>
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