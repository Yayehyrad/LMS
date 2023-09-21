import React from 'react'
import Logo from './logo'
import Sidebar_routes from './sidebar-routes'

function Sidebar() {
  return (
    <div className='flex h-full flex-col border-r overflow-y-auto bg-white shadow-sm'>
        <div className='p-6'>
            <Logo/>
        </div>
        <div className='w-full  flex flex-col'>
            <Sidebar_routes />
        </div>
    </div>
  )
}

export default Sidebar