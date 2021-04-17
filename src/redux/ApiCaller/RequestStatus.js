import { IS_PENDING, IS_SUCCESS, IS_FAILURE } from 'constants/Constants'

export const requestPending = type => `${type}/${IS_PENDING}`
export const requestSuccess = type => `${type}/${IS_SUCCESS}`
export const requestFail = type => `${type}/${IS_FAILURE}`
