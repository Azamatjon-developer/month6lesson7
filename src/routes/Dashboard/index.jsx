import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {  Home, Profile } from '../../pages/Dashboard'
import Navbar from '../../components/Navbar'
import Explore from '../../pages/Dashboard/Explore'
import Notifications from '../../pages/Dashboard/Notifications'
import Messages from '../../pages/Dashboard/Messages'
import Bookmarks from '../../pages/Dashboard/Bookmarks'
import Lists from '../../pages/Dashboard/Lists'
import More from '../../pages/Dashboard/More'

function DashboardPage() {
  return (
    <div className='container mx-auto flex justify-between'>
      <Navbar/> 
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </div>
  )
}

export default DashboardPage
