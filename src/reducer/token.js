import { TOKEN_GAME } from '../actions';

const INITIAL_STATE = '';

const token = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TOKEN_GAME:
    return action.token.token;
  default:
    return state;
  }
};

export default token;
