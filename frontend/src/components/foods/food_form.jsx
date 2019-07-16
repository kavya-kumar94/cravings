import React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

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
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.check = this.check.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        this.props.history.push({
            pathname: '/foods',
            search: `?sweet=${this.state.sweet}&spicy=${this.state.spicy}&salty=${this.state.salty}&savory=${this.state.savory}&hot=${this.state.hot}&cold=${this.state.cold}&healthy=${this.state.healthy}&junk=${this.state.junk}&happy=${this.state.happy}&sad=${this.state.sad}&hangry=${this.state.hangry}&sick=${this.state.sick}&celebratory=${this.state.celebratory}&stressed=${this.state.stressed}&adventurous=${this.state.adventurous}`
        })
        // console.log(this.state);
        // this.props.history.push(`/foods?sweet=${this.state.sweet}&spicy=${this.state.spicy}&salty=${this.state.salty}&savory=${this.state.savory}&hot=${this.state.hot}&cold=${this.state.cold}&healthy=${this.state.healthy}&junk=${this.state.junk}&happy=${this.state.happy}&sad=${this.state.sad}&hangry=${this.state.hangry}&sick=${this.state.sick}&celebratory=${this.state.celebratory}&stressed=${this.state.stressed}&adventurous=${this.state.adventurous}`);

        console.log('this is the location.search')
        console.log(this.props.location);
        const parsed = queryString.parse(this.props.location.search);
        console.log(parsed);
        // this.props.fetchDrinks(parsed);
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
                <form className="food-form" onSubmit={this.handleSubmit} >
                    <div className="spicy">
                        <input type="checkbox" onClick={this.check('spicy')} value={!this.state.spicy} />
                        <label>Spicy</label>
                    </div>
                    <div className="sweet">
                        <input type="checkbox" onClick={this.check('sweet')} value={!this.state.sweet}/>
                        <label>Sweet</label>
                    </div>
                    <div className="salty">
                        <input type="checkbox" onClick={this.check('salty')} value={!this.state.salty}/>
                        <label>Salty</label>
                    </div>
                    <div className="savory">
                        <input type="checkbox" onClick={this.check('savory')} value={!this.state.savory}/>
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
                        <label>Junk Food</label>
                    </div>
                    <div className="sad">
                        <input type="checkbox" onClick={this.check('sad')} value={!this.state.sad}/>
                        <label>Sad</label>
                    </div>
                    <div className="happy">
                        <input type="checkbox" onClick={this.check('happy')} value={!this.state.happy} />
                        <label>Happy</label>
                    </div>
                    <div className="hangry">
                        <input type="checkbox" onClick={this.check('hangry')} value={!this.state.hangry} />
                        <label>Hangry</label>
                    </div>
                    <div className="sick">
                        <input type="checkbox" onClick={this.check('sick')} value={!this.state.sick} />
                        <label>Sick</label>
                    </div>
                    <div className="celebratory">
                        <input type="checkbox" onClick={this.check('celebratory')} value={!this.state.celebratory} />
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
                    <button className="foodform-btn" type="submit" value="Find my food!" />
                </form>
            </div>
        )
    }

}

export default withRouter(FoodForm);