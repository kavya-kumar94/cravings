import React from 'react';
import './waiting_room.css';
import { withRouter } from 'react-router-dom';
import socketIOClient from 'socket.io-client';

class WaitingRoom extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        debugger
        this.props.fetchRoom(this.props.match.params.roomId);
        // var socket = socketIOClient(window.location.origin);
        // socket.emit('chat', { msg: "im in the waiting room" });
    }

    render(){
        debugger
        return(
            <div>
                <div>this is the waiting room: {this.props.room.name}</div>
                <div>people waiting: {this.props.room.users}</div>
            </div>
        )
    }

}

export default withRouter(WaitingRoom);