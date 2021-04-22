import { combineReducers } from 'redux'

import auth from 'redux/Reducers/Auth'
import profile from 'redux/Reducers/Profile'

const appReducers = combineReducers({
  auth,
  profile,
})

export default appReducers
