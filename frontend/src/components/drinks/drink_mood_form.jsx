import React from 'react';
import { withRouter } from 'react-router-dom';

class DrinkForm extends React.Component {
    constructor(props) {
        super(props);
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     this.props.history.push('/foods');
    // }

    render() {
        return(
            <form className="drink-form" >
                <div className="caffeing">
                    <input type="checkbox"/>
                    <label>Caffeine</label>
                </div>
                <div className="sweet">
                    <input type="checkbox"/>
                    <label>Sweet</label>
                </div>
                <div className="aromatic">
                    <input type="checkbox"/>
                    <label>Aromatic</label>
                </div>
                <div className="hot">
                    <input type="checkbox"/>
                    <label>Hot</label>
                </div>
                <div className="iced">
                    <input type="checkbox"/>
                    <label>Iced</label>
                </div>
                <div className="healthy">
                    <input type="checkbox"/>
                    <label>Healthy</label>
                </div>
                <div className="sad">
                    <input type="checkbox"/>
                    <label>Sad</label>
                </div>
                <div className="tired">
                    <input type="checkbox"/>
                    <label>Tired</label>
                </div>
                <div className="happy">
                    <input type="checkbox"/>
                    <label>Happy</label>
                </div>
                <div className="angry">
                    <input type="checkbox"/>
                    <label>Angry</label>
                </div>
                <div className="sick">
                    <input type="checkbox"/>
                    <label>Sick</label>
                </div>
                <div className="celebratory">
                    <input type="checkbox"/>
                    <label>Celebratory</label>
                </div>
                <div className="stressed">
                    <input type="checkbox"/>
                    <label>Stressed</label>
                </div>
                <div className="adventurous">
                    <input type="checkbox"/>
                    <label>Adventurous</label>
                </div>
                <input type="submit" value="Find my drink!"/>
            </form>
        )
    }

}

export default withRouter(DrinkForm);