import React from 'react';
import './lobby.css';
import { withRouter } from 'react-router-dom';
import socketIOClient from 'socket.io-client';

class Lobby extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roomName: '',            
            userName: '', 
        };

        this.handleCreate = this.handleCreate.bind(this);
        this.handleJoin = this.handleJoin.bind(this);
    }

    handleJoin(e){
        e.preventDefault();
        var socket = socketIOClient(window.location.origin);
        socket.emit('chat', { msg: "im in the lobby" });
    }

    handleCreate(e){
        e.preventDefault();
        this.props.createRoom()
            .then(this.props.closeModal);

        var socket = socketIOClient(window.location.origin);
        socket.emit('chat', { msg: "im in the lobby" });
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render(){
        return (
            <div className="lobby-container">
                <form>
                    <input type="text" placeholder="Enter room name" onChange={this.update('roomName')}/>
                    <input type="text" placeholder="Enter your name" onChange={this.update('userName')}/>
                    <input type="submit" value="Join Room"/>
                </form>
                <button onClick={this.handleJoin}>Join Room</button>
                <button onClick={this.handleCreate}>Create Room</button>
            </div>
        )
    }

}

export default withRouter(Lobby);