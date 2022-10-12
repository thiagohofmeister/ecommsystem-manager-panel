import { makeStyles } from '@material-ui/core'
import { Outlet } from 'react-router-dom'

import { useLayout } from './hooks/useLayout'
import SideMenu from './SideMenu'
import TopBar from './TopBar'

const useLayoutStyles = makeStyles(
  {
    root: {
      overflow: 'hidden',
      height: '100%',

      '&__container': {
        width: '100%',
        maxHeight: 'calc(100vh - 60px)',
        display: 'flex'
      }
    }
  },
  { name: 'Layout' }
)

const Layout: React.FC<any> = props => {
  const classes = useLayoutStyles()
  const { viewLoading } = useLayout()

  if (viewLoading) {
    return <div>Carregando...</div>
  }

  return (
    <div className={classes.root}>
      <TopBar />

      <div className={`${classes.root}__container`}>
        <SideMenu />

        <Outlet />
      </div>
    </div>
  )
}

export default Layout
