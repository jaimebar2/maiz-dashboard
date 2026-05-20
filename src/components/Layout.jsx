import { useState } from 'react'

const usuario = JSON.parse(
  localStorage.getItem('usuario')
)

const NAV = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: '◈',
  },

  {
    id: 'cultivos',
    label: 'Cultivos',
    icon: '🌽',
  },

  {
    id: 'mediciones',
    label: 'Mediciones',
    icon: '📊',
  },

  {
    id: 'ia',
    label: 'Análisis IA',
    icon: '🤖',
  },

  {
    id: 'alertas',
    label: 'Alertas',
    icon: '🚨',
  },

  {
    id: 'siembra',
    label: 'Siembra',
    icon: '📅',
  },

  ...(usuario?.rol === 'admin'
    ? [
        {
          id: 'usuarios',
          label: 'Usuarios',
          icon: '👤',
        },
      ]
    : []),
]

export default function Layout({
  page,
  setPage,
  children,
}) {
  const [collapsed, setCollapsed] =
    useState(false)

  const cerrarSesion = () => {
    localStorage.removeItem('token')

    localStorage.removeItem('usuario')

    window.location.replace('/')
  }

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
      }}
    >
      {/* SIDEBAR */}
      <aside
        style={{
          width: collapsed ? 70 : 240,
          background: '#111827',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          transition: '0.2s',
        }}
      >
        {/* LOGO */}
        <div
          style={{
            padding: 20,
            borderBottom:
              '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <h1
            style={{
              fontSize: 24,
              margin: 0,
            }}
          >
            🌽 {!collapsed && 'MaízIA'}
          </h1>

          {!collapsed && (
            <p
              style={{
                fontSize: 12,
                opacity: 0.7,
                marginTop: 4,
              }}
            >
              Sistema agrícola inteligente
            </p>
          )}
        </div>

        {/* MENU */}
        <nav
          style={{
            flex: 1,
            padding: 10,
          }}
        >
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() =>
                setPage(item.id)
              }
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: 14,
                marginBottom: 8,
                border: 'none',
                borderRadius: 12,
                cursor: 'pointer',
                background:
                  page === item.id
                    ? '#16a34a'
                    : 'transparent',
                color: '#fff',
                fontSize: 15,
                textAlign: 'left',
              }}
            >
              <span>{item.icon}</span>

              {!collapsed && (
                <span>{item.label}</span>
              )}
            </button>
          ))}
        </nav>

        {/* BOTONES */}
        <div
          style={{
            padding: 10,
            borderTop:
              '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {/* COLAPSAR */}
          <button
            onClick={() =>
              setCollapsed(!collapsed)
            }
            style={{
              width: '100%',
              padding: 12,
              marginBottom: 10,
              border: 'none',
              borderRadius: 10,
              background: '#374151',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            {collapsed
              ? '➡ Abrir'
              : '⬅ Ocultar'}
          </button>

          {/* CERRAR SESION */}
          <button
            onClick={cerrarSesion}
            style={{
              width: '100%',
              padding: 12,
              border: 'none',
              borderRadius: 10,
              background: '#dc2626',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            🚪 {!collapsed &&
              'Cerrar Sesión'}
          </button>
        </div>
      </aside>

      {/* CONTENIDO */}
      <main
        style={{
          flex: 1,
          background: '#f3f4f6',
        }}
      >
        {/* HEADER */}
        <div
          style={{
            background: '#fff',
            padding: '20px 30px',
            borderBottom:
              '1px solid #e5e7eb',
            display: 'flex',
            justifyContent:
              'space-between',
            alignItems: 'center',
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 24,
            }}
          >
            {
              NAV.find(
                (n) => n.id === page
              )?.icon
            }{' '}
            {
              NAV.find(
                (n) => n.id === page
              )?.label
            }
          </h2>

          <div
            style={{
              fontSize: 14,
              color: '#6b7280',
            }}
          >
            👤 {usuario?.nombre}
          </div>
        </div>

        {/* PAGINA */}
        <div
          style={{
            padding: 30,
          }}
        >
          {children}
        </div>
      </main>
    </div>
  )
}