"use client"
import {Layout , Compass} from "lucide-react"
import Sidebar_item from "./sidebar-item"

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

function Sidebar_routes() {
    const route = guestRoute
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