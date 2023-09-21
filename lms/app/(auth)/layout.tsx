export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className=" w-full h-screen flex justify-center items-center">{children}</section>
  }