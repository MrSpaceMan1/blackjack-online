import RoomAddModal from './RoomAddModal';
import React, { useReducer, useEffect } from 'react';
import { connect } from 'react-redux';


function RoomsList({rooms}) {
    const [modalEnabled, modalSwitch] = useReducer((state) => {return !state}, false);
    
    useEffect(() => {
        console.log(rooms);
    }, [rooms]);
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
                return (<li key={room.id}>Name: {room.name} | Players: {room.players}/{room.maxPlayers}</li>)
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