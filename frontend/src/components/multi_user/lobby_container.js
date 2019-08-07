import { connect } from 'react-redux';
import Lobby from './lobby';
import { createRoom, updateRoom, fetchRoom, deleteRoom } from '../../actions/room_actions';

// const mapStateToProps = (state) => {
//     return {
//         currentUser: state.session.user,
//         gameRooms: Object.values(state.entities.gameRooms)
//     };
// }

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