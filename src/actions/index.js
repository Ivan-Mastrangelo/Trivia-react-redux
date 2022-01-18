import requestTokenAPI from '../services/requestToken';
import requestGameAPI from '../services/requestApiGame';

export const USER_INFO = 'USER_INFO';
export const TOKEN_GAME = 'TOKEN_GAME';
export const TOKEN_QUESTIONS = 'TOKEN_QUESTIONS';

export const actionUser = (payload) => ({
  type: USER_INFO,
  payload,
});

export const actionToken = (token) => ({
  type: TOKEN_GAME,
  token,
});

export const actionGame = (token) => ({
  type: TOKEN_QUESTIONS,
  token,
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
  requestGameAPI(getToken)
    .then((game) => {
      localStorage.setItem('game', game.results);
      dispatch(actionGame(game));
    });
};
