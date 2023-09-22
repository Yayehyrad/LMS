"use client"
import { UserButton } from "@clerk/nextjs/app-beta/client"
import { useRouter , usePathname } from "next/navigation"
import { Button } from "./ui/button"
import { LogOut } from "lucide-react"
import Link from "next/dist/client/link"
function Navbar_Routes() {

  const pathname = usePathname()
  const router = useRouter()
  
  const isTeacher = pathname?.startsWith('/teacher')
  const isPlayerPage = pathname?.includes("/chapter")

  return (
    <div className="flex gap-x-2 ml-auto">
        {isTeacher || isPlayerPage ?
        <Link href={"/"}>
          <Button  className="">
            <LogOut className="h-4 w-4 mr-2" />EXIT
            </Button>
          </Link> : 
          <Link href={"/teacher/courses"}>
          <Button size="sm">Teacher</Button></Link>}
        <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default Navbar_Routes