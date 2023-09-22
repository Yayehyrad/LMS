"use client"
import {Layout , Compass, List, BarChart} from "lucide-react"
import Sidebar_item from "./sidebar-item"
import {usePathname} from "next/navigation"

const guestRoute = [
    {
        Icon : Layout,
        label : "DashBoard",
        href  : "/"
    },
    {
        Icon : Compass,
        label : "Browse",
        href  : "/search"
    }
]
const teacherRoute = [
    {
        Icon : List,
        label : "Courses",
        href  : "/teacher/courses"
    },
    {
        Icon : BarChart,
        label : "Analytics",
        href  : "/teacher/analytics"
    }
]

function Sidebar_routes() {
    const pathname = usePathname()
    const isTeacher = pathname?.startsWith('/teacher')
    const route = isTeacher ? teacherRoute : guestRoute;
  return (
    <div className="flex flex-col w-full">
        { 
        route.map((route)=>{
            return <Sidebar_item 
                key={route.href}
                icon ={route.Icon}
                href = {route.href}
                label = {route.label}
            />
        })
        }
    </div>
  )
}

export default Sidebar_routes