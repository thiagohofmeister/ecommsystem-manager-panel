import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import actions from './actions'
import { LayoutDispatch } from './types'

export const useLayoutDuck = () => {
  const layoutActions = bindActionCreators(actions, useDispatch<LayoutDispatch>())

  return {
    layoutActions
  }
}
