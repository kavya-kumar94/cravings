import React from 'react';
import './lobby.css';
import { withRouter } from 'react-router-dom';

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
        this.props.updateRoom(this.state)
            .then(data => this.props.history.push(`/lobby/${data.room._id}`));
    }

    handleCreate(e){
        e.preventDefault();
        this.props.createRoom(this.state)
            .then(data => this.props.history.push(`/lobby/${data.room._id}`));
        
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