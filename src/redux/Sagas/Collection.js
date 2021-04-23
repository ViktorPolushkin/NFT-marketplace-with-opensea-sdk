import { takeLatest } from 'redux-saga/effects'

import apiCaller from 'redux/ApiCaller'

import {
  DO_REQUEST_COLLECTIONS,
  DO_CREATE_COLLECTION,
  DO_READ_COLLECTION,
  DO_UPDATE_COLLECTION,
  DO_DELETE_COLLECTION,
} from 'constants/Constants'

const doRequestCollections = apiCaller({
  type: DO_REQUEST_COLLECTIONS,
  method: 'get',
  path: () => '/collection/',
})

const doCreateCollection = apiCaller({
  type: DO_CREATE_COLLECTION,
  method: 'post',
  path: () => '/collection/',
})

const doReadCollection = apiCaller({
  type: DO_READ_COLLECTION,
  method: 'get',
  path: ({ payload }) => `/collection/${payload.collectionId}`,
})

const doUpdateCollection = apiCaller({
  type: DO_UPDATE_COLLECTION,
  method: 'put',
  path: ({ payload }) => `/collection/${payload.collectionId}`,
})

const doDeleteCollection = apiCaller({
  type: DO_DELETE_COLLECTION,
  method: 'delete',
  path: ({ payload }) => `/collection/${payload.collectionId}`,
})

export default function* rootSaga() {
  yield takeLatest(DO_REQUEST_COLLECTIONS, doRequestCollections)
  yield takeLatest(DO_CREATE_COLLECTION, doCreateCollection)
  yield takeLatest(DO_READ_COLLECTION, doReadCollection)
  yield takeLatest(DO_UPDATE_COLLECTION, doUpdateCollection)
  yield takeLatest(DO_DELETE_COLLECTION, doDeleteCollection)
}
