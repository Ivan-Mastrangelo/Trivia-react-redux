import { TOKEN_GAME } from '../actions';

const INITIAL_STATE = {
  token: '',
};

const token = (state = INITIAL_STATE, action) => {
  const getToken = {
    [TOKEN_GAME]: {
      ...state,
      token: action.payload,
    },
  };
  const verify = getToken[action.type];
  if (verify) return verify;
  return state;
};

export default token;
