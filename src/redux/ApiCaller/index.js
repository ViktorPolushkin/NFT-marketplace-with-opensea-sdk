import axios from 'axios'
import { call, put } from 'redux-saga/effects'
import { get } from 'lodash'
import { APP_NAME } from 'constants/Constants'
import { requestFail, requestPending, requestSuccess } from './RequestStatus'
import { API_ROOT, API_REQUEST_TIMEOUT } from 'configuration'

const defaultHeaders = () => {
  const auth = localStorage.getItem(APP_NAME)

  axios.defaults.baseURL = API_ROOT
  axios.defaults.timeout = API_REQUEST_TIMEOUT

  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

  if (auth) {
    const token = JSON.parse(auth).token
    headers['Authorization'] = 'Bearer ' + token
  }

  return headers
}

const apiCaller = ({
  type, // * ACTION type.
  method, // * HTTP Verbs are placed here.
  path, // * RESTful API path.
  headers, // * API REQUEST headers.
  successSaga, // * SUCCESS CALLBACK for redux-saga
  failureSaga, // * FAILURE CALLBACK for redux-saga
  payloadOnSuccess, // * PAYLOAD on Success for state change
  payloadOnFailure, // * PAYLOAD on FAILURE for state change
}) =>
  function* (action) {
    const {
      body, // * REQUEST BODY of reducer
      header, // * HEADER FROM of reducer
      params, // * REQUEST PARAMS of reducer
      onSuccess, // * SUCCESS CALLBACK for reducer
      onFailure, // * FAILURE CALLBACK for reducer
    } = action.payload || {}

    try {
      yield put({
        type: requestPending(type),
      })

      // * Get response from server after AXIOS CALL
      const res = yield call(axios.request, {
        url: typeof path === 'function' ? path(action) : path,
        method: method.toLowerCase(),
        headers: Object.assign({}, defaultHeaders(), headers, header),
        data: body,
        params,
      })

      // * Call callback functions of reducer & redux-saga
      onSuccess && onSuccess(res)
      successSaga && successSaga(res, action)

      // * Action dispatch
      yield put({
        type: requestSuccess(type),
        payload: payloadOnSuccess
          ? payloadOnSuccess(res.data, action)
          : res.data,
      })
    } catch (err) {
      const errRes = get(err, 'response', err)

      onFailure && onFailure(errRes)
      failureSaga && failureSaga(errRes)

      yield put({
        type: requestFail(type),
        payload: payloadOnFailure ? payloadOnFailure(errRes, action) : errRes,
      })
    }
  }

export default apiCaller
