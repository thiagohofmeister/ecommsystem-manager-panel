import { Reducer } from 'react'
import { useDispatch } from 'react-redux'
import { Action, bindActionCreators, Dispatch } from 'redux'

import { Token } from '../models/Token'

const INITIAL_STATE: ILayoutState = {
  sideMenuOpen: true,
  loggedUser: null
}

export enum LayoutTypes {
  SET_SIDE_MENU_OPEN = '@layout/SET_SIDE_MENU_OPEN',
  SET_LOGGED_USER = '@layout/SET_LOGGED_USER'
}

export const setSideMenuOpen = (payload: boolean) => ({
  type: LayoutTypes.SET_SIDE_MENU_OPEN,
  payload
})

export const setLoggedUser = (payload: Token) => ({
  type: LayoutTypes.SET_LOGGED_USER,
  payload
})

const actions = {
  setSideMenuOpen,
  setLoggedUser
}

export const reducer: Reducer<ILayoutState, ILayoutAction> = (
  currentState = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case LayoutTypes.SET_SIDE_MENU_OPEN:
      return {
        ...currentState,
        sideMenuOpen: action.payload
      }

    case LayoutTypes.SET_LOGGED_USER:
      return {
        ...currentState,
        loggedUser: action.payload
      }

    default:
      return currentState
  }
}

export const useLayoutDuck = () => {
  const layoutActions = bindActionCreators(actions, useDispatch<LayoutDispatch>())

  return {
    layoutActions
  }
}

export interface ILayoutState {
  sideMenuOpen: boolean
  loggedUser: Token | null
}

type ILayoutAction =
  | { type: LayoutTypes.SET_SIDE_MENU_OPEN; payload: boolean }
  | { type: LayoutTypes.SET_LOGGED_USER; payload: Token | null }

type LayoutDispatch = Dispatch<Partial<ILayoutState> & Action<ILayoutAction>>
