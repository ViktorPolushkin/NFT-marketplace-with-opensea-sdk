import { get } from 'lodash'

export const authStateSelector = state => get(state, 'auth')
export const profileStateSelector = state => get(state, 'profile')
export const collectionStateSelector = state => get(state, 'collection')
export const userStateSelector = state => get(state, 'user')
