import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Usuarios() {
  const [usuarios, setUsuarios] =
    useState([])

  const [nombre, setNombre] =
    useState('')

  const [correo, setCorreo] =
    useState('')

  const [password, setPassword] =
    useState('')

  const cargarUsuarios = async () => {
    try {
      const res = await axios.get(
        'http://localhost:3000/api/usuarios'
      )

      setUsuarios(
        Array.isArray(res.data)
          ? res.data
          : []
        )
    } catch (error) {
      console.log(error)
      alert(
        'Error cargando usuarios'
      )
    }
  }

  useEffect(() => {
    cargarUsuarios()
  }, [])

  const crearUsuario = async () => {
    try {
      await axios.post(
        'http://localhost:3000/api/auth/register',
        {
          nombre,
          correo,
          password,
        }
      )

      alert('Usuario creado')

      setNombre('')
      setCorreo('')
      setPassword('')

      cargarUsuarios()
    } catch (error) {
      console.log(error)

      alert(
        'Error creando usuario'
      )
    }
  }

  const eliminarUsuario = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/usuarios/${id}`
      )

      cargarUsuarios()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1
        style={{
          marginBottom: 20,
        }}
      >
        👤 Usuarios
      </h1>

      {/* FORM */}
      <div
        style={{
          background: '#fff',
          padding: 20,
          borderRadius: 12,
          marginBottom: 20,
        }}
      >
        <input
          placeholder='Nombre'
          value={nombre}
          onChange={(e) =>
            setNombre(e.target.value)
          }
          style={{
            width: '100%',
            padding: 12,
            marginBottom: 10,
          }}
        />

        <input
          placeholder='Correo'
          value={correo}
          onChange={(e) =>
            setCorreo(e.target.value)
          }
          style={{
            width: '100%',
            padding: 12,
            marginBottom: 10,
          }}
        />

        <input
          placeholder='Password'
          type='password'
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={{
            width: '100%',
            padding: 12,
            marginBottom: 10,
          }}
        />

        <button
          onClick={crearUsuario}
          style={{
            padding: 12,
            background: 'green',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
          }}
        >
          Crear Usuario
        </button>
      </div>

      {/* LISTA */}
      <div
        style={{
          background: '#fff',
          borderRadius: 12,
          padding: 20,
        }}
      >
        {usuarios.map((u) => (
          <div
            key={u.id}
            style={{
              display: 'flex',
              justifyContent:
                'space-between',
              alignItems: 'center',
              padding: 12,
              borderBottom:
                '1px solid #ddd',
            }}
          >
            <div>
              <strong>{u.nombre}</strong>

              <div>{u.correo}</div>
            </div>

            <button
              onClick={() =>
                eliminarUsuario(u.id)
              }
              style={{
                background: 'red',
                color: '#fff',
                border: 'none',
                padding:
                  '8px 12px',
                borderRadius: 8,
              }}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}