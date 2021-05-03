import { takeLatest } from 'redux-saga/effects'

import apiCaller from 'redux/ApiCaller'

import {
  DO_REQUEST_CREATORS,
  DO_REQUEST_USER,
  DO_UPDATE_USER,
} from 'constants/Constants'

const doRequestCreators = apiCaller({
  type: DO_REQUEST_CREATORS,
  method: 'get',
  path: '/user/creators',
})

const doRequestUser = apiCaller({
  type: DO_REQUEST_USER,
  method: 'get',
  path: ({ payload }) => `/user/${payload.params}/`,
})

const doUpdateUser = apiCaller({
  type: DO_UPDATE_USER,
  method: 'put',
  path: ({ payload }) => `/user/${payload.params}/`,
})

export default function* rootSaga() {
  yield takeLatest(DO_REQUEST_CREATORS, doRequestCreators)
  yield takeLatest(DO_REQUEST_USER, doRequestUser)
  yield takeLatest(DO_UPDATE_USER, doUpdateUser)
}
