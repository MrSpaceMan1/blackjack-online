import RoomAddModal from './RoomAddModal';
import React, { useReducer, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function RoomsList({rooms}) {
    const [modalEnabled, modalSwitch] = useReducer((state) => {return !state}, false);
    
    const navigate = useNavigate()
    return ( 
    <div>
        <RoomAddModal 
            modalEnabled={modalEnabled} 
            modalSwitch={modalSwitch}
        />
        <button onClick={modalSwitch}>Stwórz pokój</button>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            {rooms && rooms.map(room => {
                return (<li key={room.id}>Name: {room.name} | Players: {room.players}/{room.maxPlayers} <button disabled={room.players/room.maxPlayers === 1}>Dołącz</button></li>)
            })}
        </ul>
    </div>
    );
}

const mapStateToProps = state => {
    return {
        rooms: state.room.rooms
    }
}

export default connect(mapStateToProps, null)(RoomsList);