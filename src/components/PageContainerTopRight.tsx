import { PropsWithChildren, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import { usePageContainerTopStyles } from './PageContainerTop'

const PageContainerTopRight: React.FC<PropsWithChildren> = ({ children }) => {
  const [ref, setRef] = useState<Element | null>()
  const classesPageContainerTop = usePageContainerTopStyles()

  useEffect(() => {
    setRef(document.querySelector(`.${classesPageContainerTop.right}`))
  }, [])

  return ref ? ReactDOM.createPortal(children, ref) : <></>
}

export default PageContainerTopRight
