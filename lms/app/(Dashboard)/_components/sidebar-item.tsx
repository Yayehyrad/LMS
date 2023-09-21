import React from 'react'
import {LucideIcon} from "lucide-react"
import {usePathname , useRouter} from "next/navigation"
import { cn } from '@/lib/utils'

interface Sidebar_item {
    icon:LucideIcon,
    href:String,
    label:String
}

function Sidebar_item({icon:Icon , href , label} : Sidebar_item) {
    const pathName = usePathname()
    const router = useRouter()

    const isActive = (pathName === "/" && href === "/") ||
                     pathName === href || pathName?.startsWith(`${href}/`)
                     console.log(pathName , href)

    const handleClick =()=>{
        router.push(href)
    }
  return (
    <button onClick={handleClick} type='button' className={cn(`flex items-center gap-x-2 font-[500px] text-sm
     text-slate-500 hover:text-slate-600 pl-6 transition-all hover:bg-slate-600/20 hover:pl-4
    `,
    isActive && "text-sky-700 hover:text-sky-700 hover:bg-slate-300/20 bg-slate-300/20 on"
    )}>
        <div className='flex items-center gap-x-2 py-4'>
            <Icon size={22} />
        </div>
        {label}
        <div className={cn(' border-2 border-sky-700 h-full ml-auto opacity-0' , isActive && "opacity-100")}/> 
    </button>
  )
}

export default Sidebar_item