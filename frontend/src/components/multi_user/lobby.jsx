import React from 'react';
import './lobby.css';
import { withRouter } from 'react-router-dom';
import socketIOClient from 'socket.io-client';

class Lobby extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        var socket = socketIOClient(window.location.origin);
        socket.emit('chat', { msg: "im in the lobby" });
    }

    render(){
        return (
            <div className="lobby-container">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter room id"/>
                    <input type="submit" value="Join Room"/>
                </form>

                <button>Create Room</button>
            </div>
        )
    }

}

export default withRouter(Lobby);