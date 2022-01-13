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
