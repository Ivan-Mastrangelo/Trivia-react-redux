import {
  TOKEN_QUESTIONS,
  START_LOADING,
  STOP_LOADING,
  TIME_OUT,
  TIME_IN,
  INDEX_QUESTION,
}
from '../actions';

const INITIAL_STATE = {
  results: [],
  loading: false,
  stopTimer: false,
  index: 0,
};

const game = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TOKEN_QUESTIONS:
    return {
      ...state,
      results: action.payload.results,
    };
  case START_LOADING:
    return {
      ...state,
      loading: true,
    };
  case STOP_LOADING:
    return {
      ...state,
      loading: false,
    };
  case TIME_OUT:
    return {
      ...state,
      stopTimer: true,
    };
  case TIME_IN:
    return {
      ...state,
      stopTimer: false,
    };
  case INDEX_QUESTION:
    return {
      ...state,
      index: action.payload,
    };
  default:
    return state;
  }
};

export default game;
