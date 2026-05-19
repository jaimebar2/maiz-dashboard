import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import './index.css'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

import ProtectedRoute from './components/ProtectedRoute'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route path='/' element={<Login />} />

        {/* DASHBOARD PROTEGIDO */}
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
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