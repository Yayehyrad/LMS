import React from 'react'
import Mobile_Sidebar from './mobilesidebar'

function Navbar() {
  return (
    <div className='p-4 h-full border-b bg-white shadow-sm flex items-center'>
        <Mobile_Sidebar />
    </div>
  )
}

export default Navbar