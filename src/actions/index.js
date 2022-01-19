import requestTokenAPI from '../services/requestToken';
import requestGameAPI from '../services/requestApiGame';

export const USER_INFO = 'USER_INFO';
export const TOKEN_GAME = 'TOKEN_GAME';
export const TOKEN_QUESTIONS = 'TOKEN_QUESTIONS';
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';

export const actionUser = (payload) => ({
  type: USER_INFO,
  payload,
});

export const actionToken = (token) => ({
  type: TOKEN_GAME,
  token,
});

export const actionGame = (payload) => ({
  type: TOKEN_QUESTIONS,
  payload,
});

export const startLoading = () => ({
  type: START_LOADING,
});

export const stopLoading = () => ({
  type: STOP_LOADING,
});

export const requestApiToken = () => (dispatch) => {
  requestTokenAPI()
    .then((token) => {
      localStorage.setItem('token', token.token);
      dispatch(actionToken(token));
    });
};

export const requestApiGame = () => (dispatch) => {
  const getToken = localStorage.getItem('token');
  dispatch(startLoading());
  requestGameAPI(getToken)
    .then((game) => {
      dispatch(actionGame(game));
      dispatch(stopLoading());
    });
};
