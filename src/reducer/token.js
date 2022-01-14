import { TOKEN_GAME } from '../actions';

const INITIAL_STATE = {
  id: '',
};

const token = (state = INITIAL_STATE, action) => {
  const getToken = {
    [TOKEN_GAME]: {
      ...state,
      id: action.payload,
    },
  };
  const verify = getToken[action.type];
  if (verify) return verify;
  return state;
};

export default token;
