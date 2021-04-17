import { createAction, handleActions } from 'redux-actions'

import {
  requestSuccess,
  requestFail,
  requestPending,
} from 'redux/ApiCaller/RequestStatus'

import { APP_NAME, DO_LOGIN, DO_LOGOUT } from 'constants/Constants'

const getInitialState = () => {
  let authRestore = JSON.parse(localStorage.getItem(APP_NAME) || null)
  return authRestore
    ? {
        status: 'init_state',
        token: authRestore.token,
        error: null,
      }
    : {
        status: 'init_state',
        token: null,
        error: null,
      }
}

export const loginAction = createAction(DO_LOGIN)
export const logoutAction = createAction(DO_LOGOUT)

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions(
  {
    [requestPending(DO_LOGIN)]: state => ({
      ...state,
      status: requestPending(DO_LOGIN),
    }),
    [requestSuccess(DO_LOGIN)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(DO_LOGIN),
      token: payload.token,
    }),
    [requestFail(DO_LOGIN)]: (state, { payload }) => ({
      ...state,
      status: requestFail(DO_LOGIN),
      token: null,
      error: payload,
    }),

    [DO_LOGOUT]: state => ({
      ...state,
      status: DO_LOGOUT,
      token: null,
      error: null,
    }),
  },
  getInitialState()
)
