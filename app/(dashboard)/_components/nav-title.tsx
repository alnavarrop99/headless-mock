import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import Link from 'next/link'

interface Props {
  value: {
    title: React.ReactNode
    description: string
    url: string
    icon: React.ElementType
  }
}

export function NavTitle({ value, ...props }: Props & React.ComponentProps<typeof SidebarMenu>) {
  return (
    <SidebarMenu {...props}>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" asChild>
          <Link href={value.url}>
            <div className="flex aspect-square size-8 place-items-center rounded-lg">
              <value.icon className="size-full" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate leading-relaxed font-bold">{value.title}</span>
              <span className="truncate text-xs">{value.description}</span>
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
