import { createAction, handleActions } from 'redux-actions'

import {
  requestSuccess,
  requestFail,
  requestPending,
} from 'redux/ApiCaller/RequestStatus'

import {
  DO_REQUEST_TOKENS,
  DO_CREATE_TOKEN,
  DO_UPDATE_TOKEN,
  DO_REQUEST_TOKEN,
  DO_REQUEST_AUCTION_TOKENS,
  DO_REQUEST_TOKEN_OFFERS,
  DO_UPDATE_TOKEN_OFFERS,
  DO_REQUEST_TOKEN_VIEWS,
  DO_UPDATE_TOKEN_VIEWS,
  DO_REQUEST_TOKEN_LIKES,
  DO_UPDATE_TOKEN_LIKES,
} from 'constants/Constants'

const getInitialState = () => ({
  status: 'init_state',
  content: null,
  error: null,
})

export const getTokensAction = createAction(DO_REQUEST_TOKENS)
export const createTokenAction = createAction(DO_CREATE_TOKEN)
export const updateTokenAction = createAction(DO_UPDATE_TOKEN)
export const getTokenAction = createAction(DO_REQUEST_TOKEN)
export const getAuctionTokensAction = createAction(DO_REQUEST_AUCTION_TOKENS)
export const getTokenOffersAction = createAction(DO_REQUEST_TOKEN_OFFERS)
export const updateTokenOffersAction = createAction(DO_UPDATE_TOKEN_OFFERS)
export const getTokenViewsAction = createAction(DO_REQUEST_TOKEN_VIEWS)
export const updateTokenViewsAction = createAction(DO_UPDATE_TOKEN_VIEWS)
export const getTokenLikesAction = createAction(DO_REQUEST_TOKEN_LIKES)
export const updateTokenLikesAction = createAction(DO_UPDATE_TOKEN_LIKES)

export default handleActions(
  {
    [requestPending(DO_REQUEST_TOKENS)]: state => ({
      ...state,
      status: requestPending(DO_REQUEST_TOKENS),
    }),
    [requestSuccess(DO_REQUEST_TOKENS)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(DO_REQUEST_TOKENS),
      content: payload,
      error: null,
    }),
    [requestFail(DO_REQUEST_TOKENS)]: (state, { payload }) => ({
      ...state,
      status: requestFail(DO_REQUEST_TOKENS),
      content: [],
      error: payload,
    }),
    [requestPending(DO_CREATE_TOKEN)]: state => ({
      ...state,
      status: requestPending(DO_CREATE_TOKEN),
    }),
    [requestSuccess(DO_CREATE_TOKEN)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(DO_CREATE_TOKEN),
      content: payload,
      error: null,
    }),
    [requestFail(DO_CREATE_TOKEN)]: (state, { payload }) => ({
      ...state,
      status: requestFail(DO_CREATE_TOKEN),
      content: {},
      error: payload,
    }),
    [requestPending(DO_UPDATE_TOKEN)]: state => ({
      ...state,
      status: requestPending(DO_UPDATE_TOKEN),
    }),
    [requestSuccess(DO_UPDATE_TOKEN)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(DO_UPDATE_TOKEN),
      content: payload,
      error: null,
    }),
    [requestFail(DO_UPDATE_TOKEN)]: (state, { payload }) => ({
      ...state,
      status: requestFail(DO_UPDATE_TOKEN),
      content: {},
      error: payload,
    }),
    [requestPending(DO_REQUEST_TOKEN)]: state => ({
      ...state,
      status: requestPending(DO_REQUEST_TOKEN),
    }),
    [requestSuccess(DO_REQUEST_TOKEN)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(DO_REQUEST_TOKEN),
      content: payload,
      error: null,
    }),
    [requestFail(DO_REQUEST_TOKEN)]: (state, { payload }) => ({
      ...state,
      status: requestFail(DO_REQUEST_TOKEN),
      content: {},
      error: payload,
    }),
    [requestPending(DO_REQUEST_AUCTION_TOKENS)]: state => ({
      ...state,
      status: requestPending(DO_REQUEST_AUCTION_TOKENS),
    }),
    [requestSuccess(DO_REQUEST_AUCTION_TOKENS)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(DO_REQUEST_AUCTION_TOKENS),
      content: payload,
      error: null,
    }),
    [requestFail(DO_REQUEST_AUCTION_TOKENS)]: (state, { payload }) => ({
      ...state,
      status: requestFail(DO_REQUEST_AUCTION_TOKENS),
      content: [],
      error: payload,
    }),
    [requestPending(DO_REQUEST_TOKEN_OFFERS)]: state => ({
      ...state,
      status: requestPending(DO_REQUEST_TOKEN_OFFERS),
    }),
    [requestSuccess(DO_REQUEST_TOKEN_OFFERS)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(DO_REQUEST_TOKEN_OFFERS),
      content: payload,
      error: null,
    }),
    [requestFail(DO_REQUEST_TOKEN_OFFERS)]: (state, { payload }) => ({
      ...state,
      status: requestFail(DO_REQUEST_TOKEN_OFFERS),
      content: {},
      error: payload,
    }),
    [requestPending(DO_UPDATE_TOKEN_OFFERS)]: state => ({
      ...state,
      status: requestPending(DO_UPDATE_TOKEN_OFFERS),
    }),
    [requestSuccess(DO_UPDATE_TOKEN_OFFERS)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(DO_UPDATE_TOKEN_OFFERS),
      content: payload,
      error: null,
    }),
    [requestFail(DO_UPDATE_TOKEN_OFFERS)]: (state, { payload }) => ({
      ...state,
      status: requestFail(DO_UPDATE_TOKEN_OFFERS),
      content: {},
      error: payload,
    }),
    [requestPending(DO_REQUEST_TOKEN_VIEWS)]: state => ({
      ...state,
      status: requestPending(DO_REQUEST_TOKEN_VIEWS),
    }),
    [requestSuccess(DO_REQUEST_TOKEN_VIEWS)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(DO_REQUEST_TOKEN_VIEWS),
      content: payload,
      error: null,
    }),
    [requestFail(DO_REQUEST_TOKEN_VIEWS)]: (state, { payload }) => ({
      ...state,
      status: requestFail(DO_REQUEST_TOKEN_VIEWS),
      content: {},
      error: payload,
    }),
    [requestPending(DO_UPDATE_TOKEN_VIEWS)]: state => ({
      ...state,
      status: requestPending(DO_UPDATE_TOKEN_VIEWS),
    }),
    [requestSuccess(DO_UPDATE_TOKEN_VIEWS)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(DO_UPDATE_TOKEN_VIEWS),
      content: payload,
      error: null,
    }),
    [requestFail(DO_UPDATE_TOKEN_VIEWS)]: (state, { payload }) => ({
      ...state,
      status: requestFail(DO_UPDATE_TOKEN_VIEWS),
      content: {},
      error: payload,
    }),
    [requestPending(DO_REQUEST_TOKEN_LIKES)]: state => ({
      ...state,
      status: requestPending(DO_REQUEST_TOKEN_LIKES),
    }),
    [requestSuccess(DO_REQUEST_TOKEN_LIKES)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(DO_REQUEST_TOKEN_LIKES),
      content: payload,
      error: null,
    }),
    [requestFail(DO_REQUEST_TOKEN_LIKES)]: (state, { payload }) => ({
      ...state,
      status: requestFail(DO_REQUEST_TOKEN_LIKES),
      content: {},
      error: payload,
    }),
    [requestPending(DO_UPDATE_TOKEN_LIKES)]: state => ({
      ...state,
      status: requestPending(DO_UPDATE_TOKEN_LIKES),
    }),
    [requestSuccess(DO_UPDATE_TOKEN_LIKES)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(DO_UPDATE_TOKEN_LIKES),
      content: payload,
      error: null,
    }),
    [requestFail(DO_UPDATE_TOKEN_LIKES)]: (state, { payload }) => ({
      ...state,
      status: requestFail(DO_UPDATE_TOKEN_LIKES),
      content: {},
      error: payload,
    }),
  },
  getInitialState()
)
