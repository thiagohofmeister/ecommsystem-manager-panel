import { makeStyles } from '@material-ui/core'

import { useLayout } from './hooks/useLayout'
import PageContainer from './PageContainer'
import SideMenu from './SideMenu'
import TopBar from './TopBar'

const useStyles = makeStyles(
  {
    root: {
      '&__container': {
        width: '100%',
        display: 'flex'
      }
    }
  },
  { name: 'Layout' }
)

const Layout: React.FC<any> = props => {
  const classes = useStyles()
  const { viewLoading } = useLayout()

  if (viewLoading) {
    return <div>Carregando...</div>
  }

  return (
    <div className={classes.root}>
      <TopBar />

      <div className={`${classes.root}__container`}>
        <SideMenu />

        <PageContainer />
      </div>
    </div>
  )
}

export default Layout
