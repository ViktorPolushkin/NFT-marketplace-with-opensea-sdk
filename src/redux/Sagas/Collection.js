import { takeLatest } from 'redux-saga/effects'

import apiCaller from 'redux/ApiCaller'

import {
  DO_REQUEST_COLLECTIONS,
  DO_UPDATE_COLLECTIONS,
} from 'constants/Constants'

const doRequestCollections = apiCaller({
  type: DO_REQUEST_COLLECTIONS,
  method: 'get',
  path: ({ payload }) => `/user/${payload.params}/collections`,
})

const doUpdateCollections = apiCaller({
  type: DO_UPDATE_COLLECTIONS,
  method: 'post',
  path: ({ payload }) => `/user/${payload.params}`,
})

export default function* rootSaga() {
  yield takeLatest(DO_REQUEST_COLLECTIONS, doRequestCollections)
  yield takeLatest(DO_UPDATE_COLLECTIONS, doUpdateCollections)
}
