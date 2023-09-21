import React from 'react'
import Mobile_Sidebar from './mobilesidebar'
import Navbar_Routes from '@/components/navbar_routes'

function Navbar() {
  return (
    <div className='p-4 h-full border-b bg-white shadow-sm flex items-center'>
        <Mobile_Sidebar />
        <Navbar_Routes />
    </div>
  )
}

export default Navbar