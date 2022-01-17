import requestTokenAPI from '../services/requestToken';

export const USER_INFO = 'USER_INFO';
export const TOKEN_GAME = 'TOKEN_GAME';

export const actionUser = (payload) => ({
  type: USER_INFO,
  payload,
});

export const actionToken = (token) => ({
  type: TOKEN_GAME,
  token,
});

export const requestApiToken = () => (dispatch) => {
  requestTokenAPI()
    .then((token) => dispatch(actionToken(token)));
};
