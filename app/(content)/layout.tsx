import GapIOBrand from '@/components/icons/gapio-brand'
import GapIOBrandTitle from '@/components/icons/gapio-brand-title'
import Link from 'next/link'

export default function Legal({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen py-8">
      <Link
        className="text-foreground absolute top-4 left-4 flex flex-row place-items-center gap-0"
        href="/"
      >
        <GapIOBrand className="size-8" />
        <GapIOBrandTitle className="-mx-3 h-5" />
      </Link>
      {children}
    </main>
  )
}
