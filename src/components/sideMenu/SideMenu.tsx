import './SideMenu.scss'

import classNames from 'classnames'
import { useCallback } from 'react'
import { useEffect } from 'react'

import { useSideMenu } from './useSideMenu'

const SideMenu = () => {
  const { classes, sideMenuOpen, sideMenuRef, toggleSideMenu } = useSideMenu()

  const addClassOpen = useCallback(() => {
    if (!sideMenuRef.current?.classList.contains(classes.opened) && !sideMenuOpen) {
      sideMenuRef.current?.classList.add(classes.opened)
    }
  }, [sideMenuOpen, classes, sideMenuRef])

  const removeClassOpen = useCallback(() => {
    if (!sideMenuOpen) {
      sideMenuRef.current?.classList.remove(classes.opened)
    }
  }, [sideMenuOpen, classes, sideMenuRef])

  useEffect(() => {}, [addClassOpen, removeClassOpen])

  return (
    <div
      className={classNames(classes.root, {
        [classes.opened]: sideMenuOpen
      })}
      ref={sideMenuRef}>
      <div onClick={toggleSideMenu}>Abrir</div>
    </div>
  )
}

export default SideMenu
