import { combineReducers } from 'redux';
import game from './game';
import player from './player';
import token from './token';

const rootReducer = combineReducers({ player, token, game });

export default rootReducer;
