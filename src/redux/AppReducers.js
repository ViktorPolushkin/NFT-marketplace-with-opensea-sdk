import { combineReducers } from 'redux'

import auth from 'redux/Reducers/Auth'
import profile from 'redux/Reducers/Profile'
import collection from 'redux/Reducers/Collection'
import user from 'redux/Reducers/User'
import token from 'redux/Reducers/Token'

const appReducers = combineReducers({
  auth,
  profile,
  collection,
  user,
  token,
})

export default appReducers
