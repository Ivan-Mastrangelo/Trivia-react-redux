import { USER_INFO } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: 0,
  gravatarEmail: '',
};

const player = (state = INITIAL_STATE, action) => {
  const playerInfo = {
    [USER_INFO]: {
      ...state,
      name: action.payload,
      assertions: action.payload,
      score: action.payload,
      gravatarEmail: action.payload,
    },
  };
  const verify = playerInfo[action.type];
  if (verify) return verify;
  return state;
};

export default player;
