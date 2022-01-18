import { TOKEN_QUESTIONS } from '../actions';

const INITIAL_STATE = {
  results: [],
};

const game = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TOKEN_QUESTIONS:
    return {
      ...state,
      results: action.payload,
    };
  default:
    return state;
  }
};

export default game;
