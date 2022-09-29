import { useRef } from 'react'
import { useDispatch } from 'react-redux'

import { useSelector } from '../../hooks/useSelector'
import { ILayoutState } from '../../store/layoutDuck'

export const useSideMenu = () => {
  const { sideMenuOpen } = useSelector<ILayoutState>('layout')
  const dispatch = useDispatch()

  const sideMenuRef = useRef<HTMLDivElement>(null)

  return {
    sideMenuOpen,
    sideMenuRef,
    dispatch
  }
}
