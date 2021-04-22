import { takeLatest } from 'redux-saga/effects'

import apiCaller from 'redux/ApiCaller'

import { DO_REQUEST_PROFILE, DO_UPDATE_PROFILE } from 'constants/Constants'

const doRequestProfile = apiCaller({
  type: DO_REQUEST_PROFILE,
  method: 'get',
  path: () => '/profile/me',
})

const doUpdateProfile = apiCaller({
  type: DO_UPDATE_PROFILE,
  method: 'post',
  path: () => 'profile/me',
})

export default function* rootSaga() {
  yield takeLatest(DO_REQUEST_PROFILE, doRequestProfile)
  yield takeLatest(DO_UPDATE_PROFILE, doUpdateProfile)
}
