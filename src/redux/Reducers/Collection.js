import { createAction, handleActions } from 'redux-actions'

import {
  requestSuccess,
  requestFail,
  requestPending,
} from 'redux/ApiCaller/RequestStatus'

import {
  DO_REQUEST_COLLECTIONS,
  DO_CREATE_COLLECTION,
  DO_READ_COLLECTION,
  DO_UPDATE_COLLECTION,
  DO_DELETE_COLLECTION,
} from 'constants/Constants'

const getInitialState = () => ({
  status: 'init_state',
  payload: null,
  error: null,
})

export const getCollectionsAction = createAction(DO_REQUEST_COLLECTIONS)
export const createCollectionAction = createAction(DO_CREATE_COLLECTION)
export const readCollectionAction = createAction(DO_READ_COLLECTION)
export const updateCollectionAction = createAction(DO_UPDATE_COLLECTION)
export const deleteCollectionAction = createAction(DO_DELETE_COLLECTION)

export default handleActions(
  {
    [requestPending(DO_REQUEST_COLLECTIONS)]: state => ({
      ...state,
      status: requestPending(DO_REQUEST_COLLECTIONS),
    }),
    [requestSuccess(DO_REQUEST_COLLECTIONS)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(DO_REQUEST_COLLECTIONS),
      payload,
      error: null,
    }),
    [requestFail(DO_REQUEST_COLLECTIONS)]: (state, { payload }) => ({
      ...state,
      status: requestFail(DO_REQUEST_COLLECTIONS),
      payload: null,
      error: payload,
    }),
    [requestPending(DO_CREATE_COLLECTION)]: state => ({
      ...state,
      status: requestPending(DO_CREATE_COLLECTION),
    }),
    [requestSuccess(DO_CREATE_COLLECTION)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(DO_CREATE_COLLECTION),
      payload,
      error: null,
    }),
    [requestFail(DO_CREATE_COLLECTION)]: (state, { payload }) => ({
      ...state,
      status: requestFail(DO_CREATE_COLLECTION),
      payload: null,
      error: payload,
    }),
    [requestPending(DO_READ_COLLECTION)]: state => ({
      ...state,
      status: requestPending(DO_READ_COLLECTION),
    }),
    [requestSuccess(DO_READ_COLLECTION)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(DO_READ_COLLECTION),
      payload,
      error: null,
    }),
    [requestFail(DO_READ_COLLECTION)]: (state, { payload }) => ({
      ...state,
      status: requestFail(DO_READ_COLLECTION),
      payload: null,
      error: payload,
    }),
    [requestPending(DO_UPDATE_COLLECTION)]: state => ({
      ...state,
      status: requestPending(DO_UPDATE_COLLECTION),
    }),
    [requestSuccess(DO_UPDATE_COLLECTION)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(DO_UPDATE_COLLECTION),
      payload,
      error: null,
    }),
    [requestFail(DO_UPDATE_COLLECTION)]: (state, { payload }) => ({
      ...state,
      status: requestFail(DO_UPDATE_COLLECTION),
      payload: null,
      error: payload,
    }),
    [requestPending(DO_DELETE_COLLECTION)]: state => ({
      ...state,
      status: requestPending(DO_DELETE_COLLECTION),
    }),
    [requestSuccess(DO_DELETE_COLLECTION)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(DO_DELETE_COLLECTION),
      payload,
      error: null,
    }),
    [requestFail(DO_DELETE_COLLECTION)]: (state, { payload }) => ({
      ...state,
      status: requestFail(DO_DELETE_COLLECTION),
      payload: null,
      error: payload,
    }),
  },
  getInitialState()
)
