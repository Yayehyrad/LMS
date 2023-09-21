"use client"
import { UserButton } from "@clerk/nextjs/app-beta/client"
function Navbar_Routes() {
  return (
    <div className="flex gap-x-2 ml-auto">
        <UserButton />
    </div>
  )
}

export default Navbar_Routes