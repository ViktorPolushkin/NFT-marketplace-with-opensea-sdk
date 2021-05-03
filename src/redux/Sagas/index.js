import { all } from 'redux-saga/effects'

import auth from 'redux/Sagas/Auth'
import profile from 'redux/Sagas/Profile'
import collection from 'redux/Sagas/Collection'
import user from 'redux/Sagas/User'
import token from 'redux/Sagas/Token'

const appSaga = function* () {
  yield all([auth(), profile(), collection(), user(), token()])
}

export default appSaga
