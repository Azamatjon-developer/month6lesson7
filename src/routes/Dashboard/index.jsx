import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Profile } from '../../pages/Dashboard'

function DashboardPage() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default DashboardPage
