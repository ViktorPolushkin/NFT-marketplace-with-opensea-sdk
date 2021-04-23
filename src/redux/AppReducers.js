import { combineReducers } from 'redux'

import auth from 'redux/Reducers/Auth'
import profile from 'redux/Reducers/Profile'
import collection from 'redux/Reducers/Collection'

const appReducers = combineReducers({
  auth,
  profile,
  collection,
})

export default appReducers
