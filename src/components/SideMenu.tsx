import { makeStyles, ThemeOptions } from '@material-ui/core'
import classNames from 'classnames'
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
      borderRight: `2px solid ${theme.sideMenu?.borderRightColor}`,
      transition: 'all 0.3s ease',
      position: 'fixed',
      top: 60,
      zIndex: 1,

      '&--opened': {
        width: '250px'
      },

      '&__item': {
        marginBottom: '5px',
        color: theme.sideMenu?.menuItem?.color,

        '&-title': {
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
        [`${classes.root}--opened`]: sideMenuOpen
      })}
      ref={sideMenuRef}>
      <nav>
        <div className={`${classes.root}__item`}>
          <div className={`${classes.root}__item-title`}>
            <Link to="/">Dashboard</Link>
          </div>
        </div>

        <div className={`${classes.root}__item`}>
          <div className={`${classes.root}__item-title`}>
            <Link to="/brand/list">Marcas</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default SideMenu
