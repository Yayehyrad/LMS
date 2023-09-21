import  Sidebar  from "@/app/(Dashboard)/_components/Sidebar"
import Navbar from "./_components/navbar"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <div className="h-full ">
      <div className="h-[80px] md:pl-56 w-full inset-y-0 z-50">
        <Navbar  />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col inset-x-0 z-50 fixed">
        <Sidebar />
      </div>
      <main className="md:pl-56 h-full">
      {children}
      </main>
      </div>
  }