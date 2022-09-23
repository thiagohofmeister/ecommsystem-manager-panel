import axios from 'axios'
import cookie from 'js-cookie'

const axiosInstance = (isLogged: boolean = true) => {
  const token = cookie.get('token')

  if (isLogged && !token) {
    // Redirect to login
  }

  const headers: any = {}

  if (token) {
    headers.authorization = `Bearer ${token}`
  }

  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers
  })

  return instance
}

export { axiosInstance }
