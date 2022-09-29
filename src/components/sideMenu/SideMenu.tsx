import './SideMenu.scss'

import classNames from 'classnames'
import { Link } from 'react-router-dom'

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
      ref={sideMenuRef}>
      <nav>
        <div className="side-menu__item">
          <div className="side-menu__item-title">
            <Link to="/">Dashboard</Link>
          </div>
        </div>

        <div className="side-menu__item">
          <div className="side-menu__item-title">
            <Link to="/brand/list">Marcas</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default SideMenu
