import { makeStyles, ThemeOptions } from '@material-ui/core'
import classNames from 'classnames'
import { useMenu } from 'hooks/useMenu'
import { Menu } from 'models/Menu'
import { useCallback } from 'react'
import { Link } from 'react-router-dom'

import { useSideMenu } from './hooks/useSideMenu'

const useStyles = makeStyles(
  (theme: ThemeOptions) => ({
    root: {
      width: '50px',
      height: 'calc(100vh - 60px)',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.sideMenu?.backgroundColor,
      transition: 'all 0.3s ease',
      position: 'fixed',
      top: 60,
      zIndex: 1,
      paddingTop: '10px',
      boxShadow:
        '0 10px 30px -12px rgb(0 0 0 / 42%), 0 4px 25px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%)',

      '&--opened': {
        width: '250px'
      },

      '&__item': {
        marginBottom: '5px',
        color: theme.sideMenu?.menuItem?.color,

        '&-title': {
          display: 'flex',
          boxSizing: 'border-box',
          width: '100%',
          padding: '10px',
          background: theme.sideMenu?.menuItem?.backgroundColor
        }
      },

      '&__sub-item': {
        padding: '10px 10px 10px 20px',
        color: theme.sideMenu?.menuSubItem?.color
      }
    }
  }),
  {
    name: 'SideMenu'
  }
)

const SideMenu = () => {
  const classes = useStyles()
  const { sideMenuOpen, sideMenuRef } = useSideMenu()
  const { menus } = useMenu()

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

  const renderMenu = useCallback(() => {
    return menus.map(menu => renderMenuItem(menu))
  }, [])

  const renderMenuItem = useCallback(
    (menu: Menu) => {
      if (menu.route) {
        return (
          <div className={`${classes.root}__item`}>
            <Link to={menu.route} className={`${classes.root}__item-title`}>
              {menu.title}
            </Link>

            {menu.children && menu.children.map(child => renderMenuItem(child))}
          </div>
        )
      }

      return (
        <div className={`${classes.root}__item`}>
          <div className={`${classes.root}__item-title`}>{menu.title}</div>
        </div>
      )
    },
    [menus]
  )

  return (
    <div
      className={classNames(classes.root, {
        [`${classes.root}--opened`]: sideMenuOpen
      })}
      ref={sideMenuRef}>
      <nav>{renderMenu()}</nav>
    </div>
  )
}

export default SideMenu
