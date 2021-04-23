import { APP } from 'configuration'

// * APP NAME CONSTANT
export const APP_NAME = APP || 'SITE_STORAGE'

// * REQUEST STATUS CONSTANT
export const IS_PENDING = 'PENDING'
export const IS_SUCCESS = 'SUCCESS'
export const IS_FAILURE = 'FAILURE'

// * LOGIN/SIGNUP CONSTANTS
// ! Attention : No signup action required, because in backend, if no user, save user.
export const DO_LOGIN = 'DO_LOGIN'
export const DO_LOGOUT = 'DO_LOGOUT'

// * PROFILE CONSTANTS
export const DO_REQUEST_PROFILE = 'DO_REQUEST_PROFILE'
export const DO_UPDATE_PROFILE = 'DO_UPDATE_PROFILE'

// * COLLECTION CONSTANTS
export const DO_REQUEST_COLLECTIONS = 'DO_REQUEST_COLLECTIONS'
export const DO_CREATE_COLLECTION = 'DO_CREATE_COLLECTION'
export const DO_READ_COLLECTION = 'DO_READ_COLLECTION'
export const DO_UPDATE_COLLECTION = 'DO_UPDATE_COLLECTION'
export const DO_DELETE_COLLECTION = 'DO_DELETE_COLLECTION'
