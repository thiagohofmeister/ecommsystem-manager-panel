import './SideMenu.scss'

import classNames from 'classnames'

import { useSideMenu } from './useSideMenu'

const SideMenu = () => {
  const { classes, sideMenuOpen, sideMenuRef } = useSideMenu()

  // const toggleSideMenu = useCallback(() => {
  //   dispatch(setSideMenuOpen(!sideMenuOpen))
  // }, [sideMenuOpen])

  // const addClassOpen = useCallback(() => {
  //   if (!sideMenuRef.current?.classList.contains(classes.opened) && !sideMenuOpen) {
  //     sideMenuRef.current?.classList.add(classes.opened)
  //   }
  // }, [sideMenuOpen, classes, sideMenuRef])

  // const removeClassOpen = useCallback(() => {
  //   if (!sideMenuOpen) {
  //     sideMenuRef.current?.classList.remove(classes.opened)
  //   }
  // }, [sideMenuOpen, classes, sideMenuRef])

  return (
    <div
      className={classNames(classes.root, {
        [classes.opened]: sideMenuOpen
      })}
      ref={sideMenuRef}></div>
  )
}

export default SideMenu
