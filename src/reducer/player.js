import { USER_INFO, NEW_SCORE } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  gravatarEmail: '',
  score: 0,
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_INFO:
    return {
      ...state,
      name: action.payload.name,
      assertions: action.payload.assertions,
      score: action.payload.score,
      gravatarEmail: action.payload.gravatarEmail,
    };
  case NEW_SCORE:
    return {
      ...state,
      score: action.payload,
    };
  default:
    return state;
  }
};

export default player;
