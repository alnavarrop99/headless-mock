import GapIOBrand from '@/components/icons/gapio-brand'
import GapIOBrandTitle from '@/components/icons/gapio-brand-title'
import Link from 'next/link'

export default function Auth({ children }: React.PropsWithChildren) {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <Link
        className="text-foreground absolute top-4 left-4 flex flex-row place-items-center gap-0"
        href="/"
      >
        <GapIOBrand className="size-8" />
        <GapIOBrandTitle className="-mx-3 h-5" />
      </Link>
      <section className="w-full max-w-sm space-y-6">
        <div className="mx-auto aspect-square size-16 rounded-md">
          <GapIOBrand className="size-full" />
        </div>
        <span className="sr-only">Acme Inc.</span>
        {children}
      </section>
    </div>
  )
}
