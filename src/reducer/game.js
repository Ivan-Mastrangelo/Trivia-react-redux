import { TOKEN_QUESTIONS, START_LOADING, STOP_LOADING } from '../actions';

const INITIAL_STATE = {
  loading: false,
};

const game = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TOKEN_QUESTIONS:
    return {
      ...state,
      results: action.payload,
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
  default:
    return state;
  }
};

export default game;
