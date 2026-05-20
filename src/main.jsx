import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import './index.css'

import App from './App'
import Login from './pages/Login'

import ProtectedRoute from './components/ProtectedRoute'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>

        {/* LOGIN */}
        <Route path='/' element={<Login />} />

        {/* APP PROTEGIDA */}
        <Route
          path='/app'
          element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          }
        />

        {/* REDIRECCIÓN */}
        <Route
          path='*'
          element={<Navigate to='/' />}
        />

      </Routes>

    </BrowserRouter>
  </React.StrictMode>
)