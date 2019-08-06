import { connect } from 'react-redux';
import WaitingRoom from './waiting_room';
import { createRoom, updateRoom, fetchRoom, deleteRoom } from '../../actions/room_actions';

const mapStateToProps = (state) => {
    return {
        room: state.room
    };
}

const mapDispatchToProps = (dispatch) => {
    return ({
        createRoom: (room) => dispatch(createRoom(room)),
        updateRoom: (room) => dispatch(updateRoom(room)),
        deleteRoom: (room) => dispatch(deleteRoom(room))
    });
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WaitingRoom);