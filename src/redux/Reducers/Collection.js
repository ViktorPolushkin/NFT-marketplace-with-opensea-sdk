import { createAction, handleActions } from 'redux-actions'

import {
  requestSuccess,
  requestFail,
  requestPending,
} from 'redux/ApiCaller/RequestStatus'

import {
  DO_REQUEST_COLLECTIONS,
  DO_UPDATE_COLLECTIONS,
} from 'constants/Constants'

const getInitialState = () => ({
  status: 'init_state',
  items: null,
  error: null,
})

export const getCollectionsAction = createAction(DO_REQUEST_COLLECTIONS)
export const updateCollectionsAction = createAction(DO_UPDATE_COLLECTIONS)

export default handleActions(
  {
    [requestPending(DO_REQUEST_COLLECTIONS)]: state => ({
      ...state,
      status: requestPending(DO_REQUEST_COLLECTIONS),
    }),
    [requestSuccess(DO_REQUEST_COLLECTIONS)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(DO_REQUEST_COLLECTIONS),
      items: payload,
      error: null,
    }),
    [requestFail(DO_REQUEST_COLLECTIONS)]: (state, { payload }) => ({
      ...state,
      status: requestFail(DO_REQUEST_COLLECTIONS),
      items: [],
      error: payload,
    }),
    [requestPending(DO_UPDATE_COLLECTIONS)]: state => ({
      ...state,
      status: requestPending(DO_UPDATE_COLLECTIONS),
    }),
    [requestSuccess(DO_UPDATE_COLLECTIONS)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(DO_UPDATE_COLLECTIONS),
      items: payload,
      error: null,
    }),
    [requestFail(DO_UPDATE_COLLECTIONS)]: (state, { payload }) => ({
      ...state,
      status: requestFail(DO_UPDATE_COLLECTIONS),
      items: [],
      error: payload,
    }),
  },
  getInitialState()
)
