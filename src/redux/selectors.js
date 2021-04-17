import { get } from 'lodash'

export const authStateSelector = state => get(state, 'auth')
