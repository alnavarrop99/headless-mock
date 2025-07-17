'use client'

import { NavActions } from '../_components/nav-actions'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'

export default function Header() {
  const pathname = usePathname()
  const title = pathname.split('/')

  title.shift()
  return (
    <header className="flex h-14 shrink-0 items-center gap-2">
      <div className="flex flex-1 items-center gap-2 px-3">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {title.map((url, index, list) => {
              const title = url.replace('-', ' ')
              return (
                <Fragment key={index}>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbPage className="line-clamp-1 capitalize">
                      {parse?.[title] ?? title}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                  {index !== list.length - 1 && <BreadcrumbSeparator className="hidden md:block" />}
                </Fragment>
              )
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="ml-auto px-3">
        <NavActions />
      </div>
    </header>
  )
}

const parse: Record<string, string> = {
  '': 'dashboard',
  ia: 'IA',
}
