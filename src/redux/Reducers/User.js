import { createAction, handleActions } from 'redux-actions'

import {
  requestSuccess,
  requestFail,
  requestPending,
} from 'redux/ApiCaller/RequestStatus'

import {
  DO_REQUEST_CREATORS,
  DO_REQUEST_USER,
  DO_UPDATE_USER,
} from 'constants/Constants'

const getInitialState = () => ({
  status: 'init_state',
  users: null,
  error: null,
})

export const getCreatorsAction = createAction(DO_REQUEST_CREATORS)
export const getUserAction = createAction(DO_REQUEST_USER)
export const updateUserAction = createAction(DO_UPDATE_USER)

export default handleActions(
  {
    [requestPending(DO_REQUEST_CREATORS)]: state => ({
      ...state,
      status: requestPending(DO_REQUEST_CREATORS),
    }),
    [requestSuccess(DO_REQUEST_CREATORS)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(DO_REQUEST_CREATORS),
      users: payload,
      error: null,
    }),
    [requestFail(DO_REQUEST_CREATORS)]: (state, { payload }) => ({
      ...state,
      status: requestFail(DO_REQUEST_CREATORS),
      users: [],
      error: payload,
    }),
    [requestPending(DO_REQUEST_USER)]: state => ({
      ...state,
      status: requestPending(DO_REQUEST_USER),
    }),
    [requestSuccess(DO_REQUEST_USER)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(DO_REQUEST_USER),
      users: payload,
      error: null,
    }),
    [requestFail(DO_REQUEST_USER)]: (state, { payload }) => ({
      ...state,
      status: requestFail(DO_REQUEST_USER),
      users: [],
      error: payload,
    }),
    [requestPending(DO_UPDATE_USER)]: state => ({
      ...state,
      status: requestPending(DO_UPDATE_USER),
    }),
    [requestSuccess(DO_UPDATE_USER)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(DO_UPDATE_USER),
      users: payload,
      error: null,
    }),
    [requestFail(DO_UPDATE_USER)]: (state, { payload }) => ({
      ...state,
      status: requestFail(DO_UPDATE_USER),
      users: [],
      error: payload,
    }),
  },
  getInitialState()
)
