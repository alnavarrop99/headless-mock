import * as React from 'react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from '@/components/ui/sidebar'
import Link from 'next/link'

// This is sample data.
const data = {
  navMain: [
    {
      title: 'Getting Started',
      url: '/getting-started',
      items: [
        {
          title: 'Structure',
          url: '#structure',
        },
      ],
    },
    {
      title: 'Building Your Application',
      url: '/building-your-application',
      items: [
        {
          title: 'Routing',
          url: '#routing',
        },
        {
          title: 'Data Fetching',
          url: '#data-fetching',
          isActive: true,
        },
        {
          title: 'Model Content',
          url: '#model-content',
        },
        {
          title: 'Styling',
          url: '#styling',
        },
        {
          title: 'Configuring',
          url: '#configuring',
        },
        {
          title: 'Templates',
          url: '#templates',
        },
        {
          title: 'IA',
          url: '#ia',
        },
        {
          title: 'Deploying',
          url: '#deploying',
        },
        {
          title: 'Upgrading',
          url: '#upgrading',
        },
        {
          title: 'Examples',
          url: '#examples',
        },
      ],
    },
    {
      title: 'Model Content',
      url: '/model-content',
      items: [
        {
          title: 'Sections',
          url: '#sections',
        },
        {
          title: 'Pages',
          url: '#pages',
        },
        {
          title: 'Globals',
          url: '#globals',
        },
      ],
    },
    {
      title: 'Architecture',
      url: '/architecture',
      items: [
        {
          title: 'Accessibility',
          url: '#accessibility',
        },
        {
          title: 'Supported Browsers',
          url: '#supported-browsers',
        },
        {
          title: 'Nextjs',
          url: '#nextjs',
        },
      ],
    },
    {
      title: 'Pricing',
      url: '/pricing',
      items: [
        {
          title: 'Starter',
          url: '#starter',
        },
        {
          title: 'Professional',
          url: '#professional',
        },
        {
          title: 'Enterprise',
          url: '#enterprise',
        },
      ],
    },
    {
      title: 'Community',
      url: '/community',
      items: [
        {
          title: 'Contact Us',
          url: '#contact-us',
        },
        {
          title: 'Youtube',
          url: '#youtube',
        },
        {
          title: 'Marketplace',
          url: '#marketplace',
        },
        {
          title: 'Shop',
          url: '#shop',
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Table of Contents</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map(item => {
                const pathname = '/docs' + item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={pathname} title={item.title} className="font-medium">
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                    {item.items?.length ? (
                      <SidebarMenuSub>
                        {item.items.map(item => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton asChild isActive={item.isActive}>
                              <Link href={{ hash: item.url, pathname }} title={item.title}>
                                {item.title}
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    ) : null}
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
