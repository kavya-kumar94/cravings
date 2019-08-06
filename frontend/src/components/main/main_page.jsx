import React from 'react';
import './main.css';
import FoodDrink from '../food_drink'
import socketIOClient from 'socket.io-client';


class MainPage extends React.Component {

    componentDidMount(){
        var socket = socketIOClient(window.location.origin);
        debugger
        socket.on('chat', function (data) {
            console.log(data);
            socket.emit('chat', { msg: "hi" });
        });
    }

    render() {
        return (
            <>
            <div className="main">
                <div className="fd">
                    <FoodDrink />
                </div>
            </div>

            {/* <div className="footer">
                hello
            </div> */}
            </>
        );
    }
}

export default MainPage;