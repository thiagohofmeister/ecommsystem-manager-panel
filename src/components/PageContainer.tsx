import { makeStyles } from '@material-ui/core'
import classNames from 'classnames'
import { Outlet } from 'react-router-dom'

import { useSideMenu } from './hooks/useSideMenu'

const useStyles = makeStyles(
  {
    root: {
      width: '100%',
      marginLeft: '55px',
      padding: '0 15px 30px',
      transition: '0.3s ease all',
      overflowY: 'scroll',

      '&--side-bar-opened': {
        marginLeft: '250px'
      }
    }
  },
  {
    name: 'PageContainer'
  }
)

const PageContainer = () => {
  const classes = useStyles()
  const { sideMenuOpen } = useSideMenu()

  return (
    <div
      className={classNames(classes.root, {
        [`${classes.root}--side-bar-opened`]: sideMenuOpen
      })}>
      <Outlet />
    </div>
  )
}

export default PageContainer
