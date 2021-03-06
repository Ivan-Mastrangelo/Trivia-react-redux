import requestTokenAPI from '../services/requestToken';
import requestGameAPI from '../services/requestApiGame';

export const USER_INFO = 'USER_INFO';
export const TOKEN_GAME = 'TOKEN_GAME';
export const TOKEN_QUESTIONS = 'TOKEN_QUESTIONS';
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';
export const TIME_OUT = 'TIME_OUT';
export const TIME_IN = 'TIME_IN';
export const NEW_SCORE = 'NEW_SCORE';
export const INDEX_QUESTION = 'INDEX_QUESTION';
export const GOAL_COUNTER = 'GOAL_COUNTER';

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

export const actionIndex = (payload) => ({
  type: INDEX_QUESTION,
  payload,
});

export const timeOut = () => ({
  type: TIME_OUT,
});

export const timeIn = () => ({
  type: TIME_IN,
});

export const newScore = (payload) => ({
  type: NEW_SCORE,
  payload,
});

export const goalCounter = () => ({
  type: GOAL_COUNTER,
});

export const requestApiToken = () => (dispatch) => {
  requestTokenAPI()
    .then((token) => {
      localStorage.setItem('token', token.token);
      dispatch(actionToken(token));
    });
};

export const requestApiGame = () => async (dispatch, getState) => {
  const { token } = getState();
  // Ref: ajuda lógica com a Fumagalli e da Priscilla na questão do token vazio
  if (token === '') {
    await dispatch(requestTokenAPI());
    return dispatch(requestApiGame());
  }
  dispatch(startLoading());
  const resultRequest = await requestGameAPI(token);
  const errorNumber = 3;
  if (resultRequest.response_code === errorNumber) {
    // como no async await estava retornando um promise, tive que ir na mentoria do Paulo para solucionar a questão do then
    requestTokenAPI()
      .then((newToken) => {
        localStorage.setItem('token', newToken.token);
        dispatch(actionToken(newToken));
        return dispatch(requestApiGame());
      });
  }
  dispatch(actionGame(resultRequest));
  dispatch(stopLoading());
};
