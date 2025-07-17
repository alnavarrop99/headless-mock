'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'
import GapIOBrand from '@/components/icons/gapio-brand'
import Link from 'next/link'

export default function Header() {
  const pathname = usePathname()
  const title = pathname.split('/')
  title.shift()

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <Link href="/">
        <GapIOBrand className="size-8" />
      </Link>
      <Breadcrumb>
        <BreadcrumbList>
          {title.map((url, index, list) => {
            const title = url.replace('-', ' ')
            return (
              <Fragment key={index}>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink asChild className="line-clamp-1 capitalize">
                    <Link href={list.slice(0, index + 1).join('/')}>{parse?.[title] ?? title}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {index !== list.length - 1 && <BreadcrumbSeparator className="hidden md:block" />}
              </Fragment>
            )
          })}
        </BreadcrumbList>
      </Breadcrumb>
      <SidebarTrigger className="-mr-1 ml-auto rotate-180" />
    </header>
  )
}

const parse: Record<string, string> = {
  docs: 'documentations',
}
