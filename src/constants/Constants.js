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
