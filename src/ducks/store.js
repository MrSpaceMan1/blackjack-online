import { createStore, combineReducers, applyMiddleware } from 'redux';
import roomReducer from './rooms/reducer';
import logger from 'redux-logger';

export const store = createStore(combineReducers({
    room: roomReducer
}), applyMiddleware(logger));