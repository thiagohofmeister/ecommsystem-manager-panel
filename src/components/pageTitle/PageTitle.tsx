import './PageTitle.scss'

import { PropsWithChildren } from 'react'

const PageTitle: React.FC<PageTitleProps> = ({ title, children }) => {
  return (
    <div className="page-title">
      <h1>{title}</h1>

      {children && <div className="page-title__right">{children}</div>}
    </div>
  )
}

interface PageTitleProps extends PropsWithChildren {
  title: string
}

export default PageTitle
