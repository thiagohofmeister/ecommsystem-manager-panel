import { LayoutTypes } from './types'

export const setSideMenuOpen = (payload: boolean) => ({
  type: LayoutTypes.SET_SIDE_MENU_OPEN,
  payload
})

const actions = {
  setSideMenuOpen: (payload: boolean) => ({
    type: LayoutTypes.SET_SIDE_MENU_OPEN,
    payload
  })
}

export default actions
