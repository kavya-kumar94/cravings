import React from 'react';
import './waiting_room.css';
import { withRouter } from 'react-router-dom';
import socketIOClient from 'socket.io-client';

class WaitingRoom extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    

}

export default withRouter(WaitingRoom);