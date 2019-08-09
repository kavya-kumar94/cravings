import { connect } from 'react-redux';
import Lobby from './lobby';
import { createRoom, updateRoom, deleteRoom } from '../../actions/room_actions';


const mapDispatchToProps = (dispatch) => {
    return ({
        createRoom: (room) => dispatch(createRoom(room)),
        updateRoom: (room) => dispatch(updateRoom(room)),
        deleteRoom: (room) => dispatch(deleteRoom(room))
    });
}

export default connect(
    null,
    mapDispatchToProps
)(Lobby);