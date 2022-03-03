import { ROOM_ADD, ROOM_EDIT, ROOM_GET, ROOM_REMOVE } from './types';

export const roomAddAction = payload => {
    return {
        type: ROOM_ADD,
        payload: payload
    }
}