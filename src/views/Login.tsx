import { useCallback, useState } from 'react'

import { useAuthenticationCreate } from '../hooks/useAuthenticationCreate'

const Login = () => {
  const { mutateAsync: auth } = useAuthenticationCreate()
  const [user, setUser] = useState({ data: '', password: '' })

  const handleSubmit = useCallback(
    async (e: any) => {
      e.preventDefault()

      await auth(user)
    },
    [user, auth]
  )

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={user.data}
          onChange={e => setUser({ ...user, data: e.target.value })}
        />
        <input
          type="password"
          placeholder="Senha"
          value={user.password}
          onChange={e => setUser({ ...user, password: e.target.value })}
        />

        <button>Acessar</button>
      </form>
    </div>
  )
}

export default Login
