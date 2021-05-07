import { takeLatest } from 'redux-saga/effects'

import apiCaller from 'redux/ApiCaller'

import {
  DO_REQUEST_TOKENS,
  DO_REQUEST_TOKENS_BY_COLLECTION_ID,
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

const doRequestTokens = apiCaller({
  type: DO_REQUEST_TOKENS,
  method: 'get',
  path: '/token/',
})

const doRequestTokensByCollectionId = apiCaller({
  type: DO_REQUEST_TOKENS_BY_COLLECTION_ID,
  method: 'put',
  path: '/token/',
})

const doCreateToken = apiCaller({
  type: DO_CREATE_TOKEN,
  method: 'post',
  path: '/token/',
})

const doUpdateToken = apiCaller({
  type: DO_UPDATE_TOKEN,
  method: 'put',
  path: ({ payload }) => `/token/${payload.params}`,
})

const doRequestToken = apiCaller({
  type: DO_REQUEST_TOKEN,
  method: 'get',
  path: ({ payload }) => `/token/${payload.params}`,
})

const doRequestAuctionTokens = apiCaller({
  type: DO_REQUEST_AUCTION_TOKENS,
  method: 'get',
  path: '/token/auction',
})
const doRequestTokenOffers = apiCaller({
  type: DO_REQUEST_TOKEN_OFFERS,
  method: 'get',
  path: ({ payload }) => `/token/${payload.params}/offers`,
})
const doUpdateTokenOffers = apiCaller({
  type: DO_UPDATE_TOKEN_OFFERS,
  method: 'post',
  path: ({ payload }) => `/token/${payload.params}/offers`,
})
const doRequestTokenViews = apiCaller({
  type: DO_REQUEST_TOKEN_VIEWS,
  method: 'get',
  path: ({ payload }) => `/token/${payload.params}/views`,
})
const doUpdateTokenViews = apiCaller({
  type: DO_UPDATE_TOKEN_VIEWS,
  method: 'post',
  path: ({ payload }) => `/token/${payload.params}/views`,
})
const doRequestTokenLikes = apiCaller({
  type: DO_REQUEST_TOKEN_LIKES,
  method: 'get',
  path: ({ payload }) => `/token/${payload.params}/likes`,
})
const doUpdateTokenLikes = apiCaller({
  type: DO_UPDATE_TOKEN_LIKES,
  method: 'post',
  path: ({ payload }) => `/token/${payload.params}/likes`,
})

export default function* rootSaga() {
  yield takeLatest(DO_REQUEST_TOKENS, doRequestTokens)
  yield takeLatest(DO_REQUEST_TOKENS_BY_COLLECTION_ID, doRequestTokensByCollectionId)
  yield takeLatest(DO_CREATE_TOKEN, doCreateToken)
  yield takeLatest(DO_UPDATE_TOKEN, doUpdateToken)
  yield takeLatest(DO_REQUEST_TOKEN, doRequestToken)
  yield takeLatest(DO_REQUEST_AUCTION_TOKENS, doRequestAuctionTokens)
  yield takeLatest(DO_REQUEST_TOKEN_OFFERS, doRequestTokenOffers)
  yield takeLatest(DO_UPDATE_TOKEN_OFFERS, doUpdateTokenOffers)
  yield takeLatest(DO_REQUEST_TOKEN_VIEWS, doRequestTokenViews)
  yield takeLatest(DO_UPDATE_TOKEN_VIEWS, doUpdateTokenViews)
  yield takeLatest(DO_REQUEST_TOKEN_LIKES, doRequestTokenLikes)
  yield takeLatest(DO_UPDATE_TOKEN_LIKES, doUpdateTokenLikes)
}
