import { takeLatest } from 'redux-saga/effects'

import apiCaller from 'redux/ApiCaller'

import { APP_NAME, DO_LOGIN } from 'constants/Constants'

const doLogin = apiCaller({
  type: DO_LOGIN,
  method: 'post',
  path: () => '/auth/login/',
  successSaga: (res, action) => {
    localStorage.setItem(APP_NAME, JSON.stringify(res.data))
  },
  failureSaga: (res, action) => {
    localStorage.removeItem(APP_NAME)
  },
})

export default function* rootSaga() {
  yield takeLatest(DO_LOGIN, doLogin)
}
