import { USER_INFO, NEW_SCORE, GOAL_COUNTER } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  gravatarEmail: '',
  score: 0,
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_INFO:
    return {
      ...state,
      name: action.payload.name,
      score: action.payload.score,
      gravatarEmail: action.payload.gravatarEmail,
    };
  case NEW_SCORE:
    return {
      ...state,
      score: action.payload,
    };
  case GOAL_COUNTER:
    return {
      ...state,
      assertions: state.assertions + 1,
    };
  default:
    return state;
  }
};

export default player;
