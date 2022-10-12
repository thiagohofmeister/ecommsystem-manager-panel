import cookie from 'js-cookie'
import jwtDecode from 'jwt-decode'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import loginRoute from 'routes/loginRoute'

import { Token } from '../../models/Token'
import { setLoggedUser } from '../../store/layoutDuck'

export const useLayout = () => {
  const [viewLoading, setViewLoading] = useState<boolean>(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const setUser = useCallback(
    (token: string) => {
      const decodedToken: Token = jwtDecode<Token>(token)
      dispatch(setLoggedUser(decodedToken))
    },
    [dispatch]
  )

  useEffect(() => {
    ;(async () => {
      const token = cookie.get('token')

      if (!token) {
        navigate(loginRoute.path)
        return
      }

      setUser(token!)

      setViewLoading(false)
    })()
  }, [setUser])

  return { viewLoading }
}
