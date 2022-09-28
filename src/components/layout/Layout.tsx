import './Layout.scss'

import PageContainer from '../pageContainer/PageContainer'
import SideMenu from '../sideMenu/SideMenu'
import TopBar from '../topBar/TopBar'
import { useLayout } from './useLayout'

const Layout: React.FC<any> = props => {
  const { viewLoading } = useLayout()

  if (viewLoading) {
    return <div>Carregando...</div>
  }

  return (
    <div className="layout">
      <TopBar />

      <div className="layout__container">
        <SideMenu />

        <PageContainer />
      </div>
    </div>
  )
}

export default Layout
