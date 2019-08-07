import React from 'react';
import './waiting_room.css';
import { withRouter } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import food_form from '../foods/food_form';

class WaitingRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            socket: null,
            polling: false,
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

        this.check = this.check.bind(this);

        // this.openSocket = this.openSocket.bind(this);
        this.startPoll = this.startPoll.bind(this);
    }

    componentDidMount(){
        var socket = socketIOClient(window.location.origin);
        this.props.fetchRoom(this.props.match.params.roomId)
            .then(data => {
                socket.emit('multiuser', data.room);
            });
        this.setState({socket: socket});
    }

    // openSocket() {
    //     this.state.socket.on(this.props.room.id, data => {

    //     });
    // }

    startPoll(){
        this.setState({polling: true})
    }

    check(field) {
        return e => this.setState({
            [field]: !!e.target.checked
        });
    }

    render(){
        return(
            <div>
                {this.state.polling ? 
                <div className="foodform">
                    <h2>Choose your food mood</h2>
                    <form className="food-form" onSubmit={this.handleSubmit} >
                        <div className="spicy">
                            <input type="checkbox" onClick={this.check('spicy')} value={!this.state.spicy} />
                            <label>Spicy</label>
                        </div>
                        <div className="sweet">
                            <input type="checkbox" onClick={this.check('sweet')} value={!this.state.sweet} />
                            <label>Sweet</label>
                        </div>
                        <div className="salty">
                            <input type="checkbox" onClick={this.check('salty')} value={!this.state.salty} />
                            <label>Salty</label>
                        </div>
                        <div className="savory">
                            <input type="checkbox" onClick={this.check('savory')} value={!this.state.savory} />
                            <label>Savory</label>
                        </div>
                        <div className="healthy">
                            <input type="checkbox" onClick={this.check('healthy')} value={!this.state.healthy} />
                            <label>Healthy</label>
                        </div>
                        <div className="celebratory">
                            <input type="checkbox" onClick={this.check('celebratory')} value={!this.state.celebratory} />
                            <label>Celebratory</label>
                        </div>
                        <div className="adventurous">
                            <input type="checkbox" onClick={this.check('adventurous')} value={!this.state.adventurous} />
                            <label>Adventurous</label>
                        </div>
                        <button className="foodform-btn" type="submit" value="Find my food!" />
                    </form>
                </div> : 
                <>
                    <div>this is the waiting room: {this.props.room.name}</div>
                    <div>people waiting: {this.props.room.users}</div>
                    <button onClick={this.startPoll}>Start Poll</button>
                </>}
            </div>
        )
    }

}

export default withRouter(WaitingRoom);