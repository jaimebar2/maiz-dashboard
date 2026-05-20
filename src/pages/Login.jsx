import { useState } from 'react'
import axios from 'axios'

export default function Login() {
  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const iniciarSesion = async (e) => {
    e.preventDefault()

    setLoading(true)

    try {
      const res = await axios.post(
        'http://localhost:3000/api/auth/login',
        {
          correo,
          password,
        }
      )

      // GUARDAR TOKEN
      localStorage.setItem('token', res.data.token)

      // GUARDAR USUARIO
      localStorage.setItem(
        'usuario',
        JSON.stringify(res.data.usuario)
      )

      alert('Login correcto ✅')

      // REDIRECCIONAR
      window.location.href = '/dashboard'

    } catch (error) {
      console.error(error)

      alert('Credenciales incorrectas ❌')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f5f5f5',
      }}
    >
      <form
        onSubmit={iniciarSesion}
        style={{
          width: '100%',
          maxWidth: 400,
          background: '#fff',
          padding: 40,
          borderRadius: 20,
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            marginBottom: 30,
            color: '#166534',
          }}
        >
          🌽 Maíz Dashboard
        </h1>

        <input
          type='email'
          placeholder='Correo'
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          style={{
            width: '100%',
            padding: 14,
            marginBottom: 20,
            borderRadius: 12,
            border: '1px solid #ccc',
            fontSize: 16,
          }}
        />

        <input
          type='password'
          placeholder='Contraseña'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: '100%',
            padding: 14,
            marginBottom: 20,
            borderRadius: 12,
            border: '1px solid #ccc',
            fontSize: 16,
          }}
        />

        <button
          type='submit'
          disabled={loading}
          style={{
            width: '100%',
            padding: 14,
            border: 'none',
            borderRadius: 12,
            background: '#16a34a',
            color: '#fff',
            fontSize: 16,
            cursor: 'pointer',
          }}
        >
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </div>
  )
}import { useState } from 'react'
import axios from 'axios'

export default function Login() {
  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const iniciarSesion = async (e) => {
    e.preventDefault()

    setLoading(true)

    try {
      const res = await axios.post(
        'http://localhost:3000/api/auth/login',
        {
          correo,
          password,
        }
      )

      // GUARDAR TOKEN
      localStorage.setItem(
        'token',
        res.data.token
      )

      // GUARDAR USUARIO
      localStorage.setItem(
        'usuario',
        JSON.stringify(res.data.usuario)
      )

      alert('Login correcto ✅')

      // REDIRECCIONAR AL SISTEMA
      window.location.replace('/app')

    } catch (error) {
      console.error(error)

      alert('Credenciales incorrectas ❌')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f5f5f5',
      }}
    >
      <form
        onSubmit={iniciarSesion}
        style={{
          width: '100%',
          maxWidth: 400,
          background: '#fff',
          padding: 40,
          borderRadius: 20,
          boxShadow:
            '0 4px 15px rgba(0,0,0,0.1)',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            marginBottom: 30,
            color: '#166534',
          }}
        >
          🌽 Maíz Dashboard
        </h1>

        <input
          type='email'
          placeholder='Correo'
          value={correo}
          onChange={(e) =>
            setCorreo(e.target.value)
          }
          style={{
            width: '100%',
            padding: 14,
            marginBottom: 20,
            borderRadius: 12,
            border: '1px solid #ccc',
            fontSize: 16,
          }}
        />

        <input
          type='password'
          placeholder='Contraseña'
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={{
            width: '100%',
            padding: 14,
            marginBottom: 20,
            borderRadius: 12,
            border: '1px solid #ccc',
            fontSize: 16,
          }}
        />

        <button
          type='submit'
          disabled={loading}
          style={{
            width: '100%',
            padding: 14,
            border: 'none',
            borderRadius: 12,
            background: '#16a34a',
            color: '#fff',
            fontSize: 16,
            cursor: 'pointer',
          }}
        >
          {loading
            ? 'Entrando...'
            : 'Entrar'}
        </button>
      </form>
    </div>
  )
}