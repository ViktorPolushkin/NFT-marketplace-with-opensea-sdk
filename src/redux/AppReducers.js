import { combineReducers } from 'redux'

import auth from 'redux/Reducers/Auth'

const appReducers = combineReducers({
  auth,
})

export default appReducers
