import { TOKEN_GAME } from '../actions';

const INITIAL_STATE = '';

const token = (state = INITIAL_STATE, action) => {
  console.log(action);
  // const getToken = {
  // [TOKEN_GAME]: {
  // return { action.token.token }
  // },
  // };
  // const verify = getToken[action.type];
  // if (verify) return verify;
  // return state;
  switch (action.type) {
  case TOKEN_GAME: return action.token.token;
  default: return state;
  }
};

export default token;
