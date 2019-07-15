import React from 'react';
import { withRouter } from 'react-router-dom';

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
        // this.props.history.push('/foods');
    }

    check(field){
        return e => this.setState({
            [field]: !this.state.field
        });
    }

    render() {
        return (
            <form className="food-form" onSubmit={this.handleSubmit} >
                <div className="spicy">
                    <input type="checkbox" onChange={this.check('spicy')} />
                    <label>Spicy</label>
                </div>
                <div className="sweet">
                    <input type="checkbox" onChange={this.check('sweet')}/>
                    <label>Sweet</label>
                </div>
                <div className="salty">
                    <input type="checkbox" onChange={this.check('salty')}/>
                    <label>Salty</label>
                </div>
                <div className="savory">
                    <input type="checkbox" onChange={this.check('savory')}/>
                    <label>Savory</label>
                </div>
                <div className="hot">
                    <input type="checkbox" onChange={this.check('hot')}/>
                    <label>Hot</label>
                </div>
                <div className="cold">
                    <input type="checkbox" onChange={this.check('cold')}/>
                    <label>Cold</label>
                </div>
                <div className="healthy">
                    <input type="checkbox" onChange={this.check('healthy')}/>
                    <label>Healthy</label>
                </div>
                <div className="junk">
                    <input type="checkbox" onChange={this.check('junk')}/>
                    <label>Junk Food</label>
                </div>
                <div className="sad">
                    <input type="checkbox" onChange={this.check('sad')}/>
                    <label>Sad</label>
                </div>
                <div className="happy">
                    <input type="checkbox" onChange={this.check('happy')}/>
                    <label>Happy</label>
                </div>
                <div className="hangry">
                    <input type="checkbox" onChange={this.check('hangry')}/>
                    <label>Hangry</label>
                </div>
                <div className="sick">
                    <input type="checkbox" onChange={this.check('sick')}/>
                    <label>Sick</label>
                </div>
                <div className="celebratory" onChange={this.check('celebratory')}>
                    <input type="checkbox" />
                    <label>Celebratory</label>
                </div>
                <div className="stressed" onChange={this.check('stressed')}>
                    <input type="checkbox" />
                    <label>Stressed</label>
                </div>
                <div className="adventurous" onChange={this.check('adventurous')}>
                    <input type="checkbox" />
                    <label>Adventurous</label>
                </div>
                <button type="submit" value="Find my food!" />
            </form>
        )
    }

}

export default withRouter(FoodForm);