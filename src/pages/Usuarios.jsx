import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([])

  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')

  const cargarUsuarios = async () => {
    try {
      const res = await axios.get(
        'http://localhost:3000/api/usuarios'
      )

      setUsuarios(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    cargarUsuarios()
  }, [])

  const crearUsuario = async (e) => {
    e.preventDefault()

    try {
      await axios.post(
        'http://localhost:3000/api/auth/register',
        {
          nombre,
          correo,
          password,
        }
      )

      alert('Usuario creado ✅')

      setNombre('')
      setCorreo('')
      setPassword('')

      cargarUsuarios()

    } catch (error) {
      console.error(error)

      alert('Error creando usuario')
    }
  }

  const eliminarUsuario = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/usuarios/${id}`
      )

      cargarUsuarios()

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <h1
        style={{
          fontSize: 28,
          marginBottom: 20,
        }}
      >
        👤 Usuarios
      </h1>

      {/* FORMULARIO */}
      <form
        onSubmit={crearUsuario}
        style={{
          background: '#fff',
          padding: 20,
          borderRadius: 20,
          marginBottom: 30,
        }}
      >
        <input
          type='text'
          placeholder='Nombre'
          value={nombre}
          onChange={(e) =>
            setNombre(e.target.value)
          }
          style={{
            width: '100%',
            padding: 12,
            marginBottom: 12,
          }}
        />

        <input
          type='email'
          placeholder='Correo'
          value={correo}
          onChange={(e) =>
            setCorreo(e.target.value)
          }
          style={{
            width: '100%',
            padding: 12,
            marginBottom: 12,
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
            padding: 12,
            marginBottom: 12,
          }}
        />

        <button
          type='submit'
          style={{
            padding: 12,
            background: '#16a34a',
            color: '#fff',
            border: 'none',
            borderRadius: 12,
          }}
        >
          Crear Usuario
        </button>
      </form>

      {/* TABLA */}
      <div
        style={{
          background: '#fff',
          borderRadius: 20,
          padding: 20,
        }}
      >
        <table
          style={{
            width: '100%',
          }}
        >
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {usuarios.map((u) => (
              <tr key={u.id}>
                <td>{u.nombre}</td>
                <td>{u.correo}</td>

                <td>
                  <button
                    onClick={() =>
                      eliminarUsuario(u.id)
                    }
                    style={{
                      background: 'red',
                      color: '#fff',
                      border: 'none',
                      padding: 8,
                      borderRadius: 8,
                    }}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}