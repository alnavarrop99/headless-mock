'use client'

import {
  ArrowDownIcon,
  ArrowUpIcon,
  BellIcon,
  CopyIcon,
  CornerUpLeftIcon,
  CornerUpRightIcon,
  FileTextIcon,
  GalleryVerticalEndIcon,
  LineChartIcon,
  LinkIcon,
  MoreHorizontalIcon,
  Settings2Icon,
  StarIcon,
  TrashIcon,
  Trash2Icon,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { useState } from 'react'

const data = [
  [
    {
      label: 'Customize Page',
      icon: Settings2Icon,
    },
    {
      label: 'Turn into wiki',
      icon: FileTextIcon,
    },
  ],
  [
    {
      label: 'Copy Link',
      icon: LinkIcon,
    },
    {
      label: 'Duplicate',
      icon: CopyIcon,
    },
    {
      label: 'Move to',
      icon: CornerUpRightIcon,
    },
    {
      label: 'Move to Trash',
      icon: Trash2Icon,
    },
  ],
  [
    {
      label: 'Undo',
      icon: CornerUpLeftIcon,
    },
    {
      label: 'View analytics',
      icon: LineChartIcon,
    },
    {
      label: 'Version History',
      icon: GalleryVerticalEndIcon,
    },
    {
      label: 'Show delete pages',
      icon: TrashIcon,
    },
    {
      label: 'Notifications',
      icon: BellIcon,
    },
  ],
  [
    {
      label: 'Import',
      icon: ArrowUpIcon,
    },
    {
      label: 'Export',
      icon: ArrowDownIcon,
    },
  ],
]

export function NavActions() {
  const [isOpen, setIsOpen] = useState(false)

  // Display open at start
  // React.useEffect(() => {
  //   setIsOpen(true)
  // }, [])

  return (
    <div className="flex items-center gap-2 text-sm">
      <div className="text-muted-foreground hidden font-medium md:inline-block">Edit Oct 08</div>
      <Button variant="ghost" size="icon" className="h-7 w-7">
        <StarIcon />
      </Button>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon" className="data-[state=open]:bg-accent h-7 w-7">
            <MoreHorizontalIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56 overflow-hidden rounded-lg p-0" align="end">
          <Sidebar collapsible="none" className="bg-transparent">
            <SidebarContent>
              {data.map((group, index) => (
                <SidebarGroup key={index} className="border-b last:border-none">
                  <SidebarGroupContent className="gap-0">
                    <SidebarMenu>
                      {group.map((item, index) => (
                        <SidebarMenuItem key={index}>
                          <SidebarMenuButton>
                            <item.icon /> <span>{item.label}</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              ))}
            </SidebarContent>
          </Sidebar>
        </PopoverContent>
      </Popover>
    </div>
  )
}
