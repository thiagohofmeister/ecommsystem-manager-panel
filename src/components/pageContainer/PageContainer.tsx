import './PageContainer.scss'

import classNames from 'classnames'
import { Outlet } from 'react-router-dom'

import { useSideMenu } from '../sideMenu/useSideMenu'

const PageContainer = () => {
  const { sideMenuOpen } = useSideMenu()

  return (
    <div
      className={classNames('page-container', {
        'page-container--side-bar-opened': sideMenuOpen
      })}>
      <Outlet />
    </div>
  )
}

export default PageContainer
