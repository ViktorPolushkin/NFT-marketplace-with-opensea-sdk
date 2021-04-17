import { all } from 'redux-saga/effects'

import auth from 'redux/Sagas/Auth'

const appSaga = function* () {
  yield all([auth()])
}

export default appSaga
