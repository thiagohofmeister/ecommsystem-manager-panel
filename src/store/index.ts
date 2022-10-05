import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import { reducer as layout } from './layoutDuck'
import { reducer as list } from './listDuck'

const reducer = combineReducers({
  layout,
  list
})

export type AppState = ReturnType<typeof reducer>

export type AppStateGetter = () => AppState

export default configureStore({
  reducer
})
