import { ROOM_ADD } from './types'

const roomReducer = (state={rooms: [], index: 0}, action) => {
    switch(action.type){
        case ROOM_ADD:
            {
                return {
                    rooms: [...state.rooms, {id: state.index, players: 1, ...action.payload}],
                    index: state.index+1
                }
            }
        default:
            return state
    }  
}

export default roomReducer