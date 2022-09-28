import { makeStyles } from '@material-ui/core'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'

import { useSelector } from '../../hooks/useSelector'
import { ILayoutState } from '../../store/layoutDuck'

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: 54,
      height: 'calc(100vh - 60px)',
      backgroundColor: '#FFF',
      borderRight: '2px solid rgba(21, 34, 50, 0.88)',
      transition: 'all 0.3s ease',
      position: 'fixed',
      zIndex: 1,
      [theme.breakpoints.down('md')]: {
        position: 'fixed',
        width: 266,
        height: '100vh',
        zIndex: 1,
        top: 0,
        left: -266,
        '& $arrowController': {
          display: 'none'
        }
      }
    },
    opened: {
      width: 250,
      '& $arrowControllerIcon': {
        transform: 'rotate(90deg)'
      },
      '&::before': {
        content: '',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#00000090',
        position: 'absolute',
        left: 266,
        top: 0,
        transition: 'all 0.3s ease'
      }
    },
    arrowController: {
      position: 'absolute',
      right: '-10px',
      top: '5px',
      backgroundColor: '#fff',
      width: 18,
      height: 18,
      borderRadius: '50%',
      boxShadow: '0 0 2px rgba(0, 0, 0, 0.16)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2,
      cursor: 'pointer',
      color: '#F00'
    },
    arrowControllerIcon: {
      display: 'flex',
      transform: 'rotate(270deg)',
      transition: '0.3s'
    }
  }),
  { name: 'SideMenu' }
)

export const useSideMenu = () => {
  const { sideMenuOpen } = useSelector<ILayoutState>('layout')
  const dispatch = useDispatch()

  const classes = useStyles()

  const sideMenuRef = useRef<HTMLDivElement>(null)

  return {
    classes,
    sideMenuOpen,
    sideMenuRef,
    dispatch
  }
}
