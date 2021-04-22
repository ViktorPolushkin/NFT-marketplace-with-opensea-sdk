import { createAction, handleActions } from 'redux-actions'

import {
  requestSuccess,
  requestFail,
  requestPending,
} from 'redux/ApiCaller/RequestStatus'

import { DO_REQUEST_PROFILE, DO_UPDATE_PROFILE } from 'constants/Constants'

const getInitialState = () => ({
  status: 'init_state',
  payload: null,
  error: null,
})

export const getProfileAction = createAction(DO_REQUEST_PROFILE)
export const updateProfileAction = createAction(DO_UPDATE_PROFILE)

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions(
  {
    [requestPending(DO_REQUEST_PROFILE)]: state => ({
      ...state,
      status: requestPending(DO_REQUEST_PROFILE),
    }),
    [requestSuccess(DO_REQUEST_PROFILE)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(DO_REQUEST_PROFILE),
      payload,
      error: null,
    }),
    [requestFail(DO_REQUEST_PROFILE)]: (state, { payload }) => ({
      ...state,
      status: requestFail(DO_REQUEST_PROFILE),
      payload: null,
      error: payload,
    }),
    [requestPending(DO_UPDATE_PROFILE)]: state => ({
      ...state,
      status: requestPending(DO_UPDATE_PROFILE),
    }),
    [requestSuccess(DO_UPDATE_PROFILE)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(DO_UPDATE_PROFILE),
      payload,
      error: null,
    }),
    [requestFail(DO_UPDATE_PROFILE)]: (state, { payload }) => ({
      ...state,
      status: requestFail(DO_UPDATE_PROFILE),
      payload: null,
      error: payload,
    }),
  },
  getInitialState()
)
