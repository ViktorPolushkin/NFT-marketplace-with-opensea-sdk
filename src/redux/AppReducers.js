import { combineReducers } from 'redux'

import auth from 'redux/Reducers/Auth'
import profile from 'redux/Reducers/Profile'
import collection from 'redux/Reducers/Collection'
import user from 'redux/Reducers/User'

const appReducers = combineReducers({
  auth,
  profile,
  collection,
  user,
})

export default appReducers
