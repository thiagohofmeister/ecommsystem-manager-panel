import './Layout.scss'

import PageContainer from '../pageContainer/PageContainer'
import SideMenu from '../sideMenu/SideMenu'
import TopBar from '../topBar/TopBar'

const Layout: React.FC<any> = props => {
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
