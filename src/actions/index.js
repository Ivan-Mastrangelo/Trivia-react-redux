import requestTokenAPI from '../services/requestToken';

export const USER_INFO = 'USER_INFO';
export const TOKEN_GAME = 'TOKEN_GAME';

export const actionUser = (payload) => ({
  type: USER_INFO,
  payload,
});

export const actionToken = (payload) => ({
  type: TOKEN_GAME,
  payload,
});

export const requestApiToken = () => (dispatch) => {
  requestTokenAPI()
    .then((token) => dispatch(actionToken(token)));
};
