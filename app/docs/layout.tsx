import { AppSidebar } from './_components/app-sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

export default function Sidebar({
  header,
  children,
}: React.PropsWithChildren<{
  header: React.ReactNode
}>) {
  return (
    <SidebarProvider>
      <SidebarInset>
        {header}
        <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
      </SidebarInset>
      <AppSidebar side="right" />
    </SidebarProvider>
  )
}
