import { ChartAreaInteractive } from './_components/chart-area-interactive'
import { DataTable } from './_components/data-table'
import { SectionCards } from './_components/section-cards'

import data from './data.json'

export default function Home() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <SectionCards />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>
      <DataTable data={data} />
    </div>
  )
}
