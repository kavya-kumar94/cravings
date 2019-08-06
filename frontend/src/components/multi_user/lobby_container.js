import { connect } from 'react-redux';
import Lobby from './lobby';
import { createGameRoom, updateGameRoom, fetchGameRooms } from '../../actions/room_actions';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        gameRooms: Object.values(state.entities.gameRooms),
        activeGameRoom: state.ui.activeGameRoom,
        users: state.entities.users
    };
}

const mapDispatchToProps = (dispatch) => {
    return ({
        createGameRoom: gameRoomData => dispatch(createGameRoom(gameRoomData)),
        updateGameRoom: gameRoomData => dispatch(updateGameRoom(gameRoomData)),
        fetchGameRooms: () => dispatch(fetchGameRooms()),
        // fetchPassage: passageId => dispatch(fetchPassage(passageId)) 
    });
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Lobby);