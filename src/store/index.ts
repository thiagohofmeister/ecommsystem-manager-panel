import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import layout from './layout'

const reducer = combineReducers({
  layout
})

export type AppState = ReturnType<typeof reducer>

export type AppStateGetter = () => AppState

export default configureStore({
  reducer
})
