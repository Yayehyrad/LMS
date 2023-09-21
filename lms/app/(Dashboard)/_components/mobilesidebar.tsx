import React from 'react'
import {Menu} from 'lucide-react'
import { cn } from '@/lib/utils'
import {Sheet ,SheetContent ,SheetTrigger} from '@/components/ui/sheet'
import Sidebar from './Sidebar'

function Mobile_Sidebar() {
  return (
    <div>
        <Sheet >
            <SheetTrigger className='md:hidden pr-4 hover:opacity-75 transition-all'>
                <Menu className={cn(" ")} />    
             </SheetTrigger>
             <SheetContent side={'left'} className='pl-0 bg bg-white'>
                <Sidebar />
             </SheetContent>
        </Sheet>
    </div>
  )
}

export default Mobile_Sidebar