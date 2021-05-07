import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import appReducers from 'redux/AppReducers'
import appSagas from 'redux/Sagas'

export const history = createBrowserHistory()

const initialState = {}
const enhancers = [
  // typeof window !== 'undefined' &&
  //   window.__REDUX_DEVTOOLS_EXTENSION__ &&
  //   window.__REDUX_DEVTOOLS_EXTENSION__(),
]

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware, routerMiddleware(history), logger]

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

const store = createStore(appReducers, initialState, composedEnhancers)

sagaMiddleware.run(appSagas)

export default store
