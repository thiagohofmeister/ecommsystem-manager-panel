import { Reducer } from 'redux'

import { ILayoutAction, ILayoutState, LayoutTypes } from './types'

const INITIAL_STATE: ILayoutState = {
  sideMenuOpen: false
}

const reducer: Reducer<ILayoutState, ILayoutAction> = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case LayoutTypes.SET_SIDE_MENU_OPEN:
      return {
        ...currentState,
        sideMenuOpen: action.payload
      }

    default:
      return currentState
  }
}

export default reducer
