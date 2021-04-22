import { all } from 'redux-saga/effects'

import auth from 'redux/Sagas/Auth'
import profile from 'redux/Sagas/Profile'

const appSaga = function* () {
  yield all([auth(), profile()])
}

export default appSaga
