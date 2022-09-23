import { Action, Dispatch } from 'redux'

export enum LayoutTypes {
  SET_SIDE_MENU_OPEN = '@layout/SET_SIDE_MENU_OPEN'
}

export interface ILayoutState {
  sideMenuOpen: boolean
}

export type ILayoutAction = { type: LayoutTypes.SET_SIDE_MENU_OPEN; payload: boolean }

export type LayoutDispatch = Dispatch<Partial<ILayoutState> & Action<ILayoutAction>>
