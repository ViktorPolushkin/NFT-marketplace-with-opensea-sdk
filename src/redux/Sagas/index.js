import { all } from 'redux-saga/effects'

import auth from 'redux/Sagas/Auth'
import profile from 'redux/Sagas/Profile'
import collection from 'redux/Sagas/Collection'

const appSaga = function* () {
  yield all([auth(), profile(), collection()])
}

export default appSaga
