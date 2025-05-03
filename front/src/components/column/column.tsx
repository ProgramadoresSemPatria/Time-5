import { Column } from './types'
import { useDroppable } from '@dnd-kit/core'
import { JobCard } from '../job-card/types'
import { JobCard as JobCardComponent } from '../job-card/job-card'
import { SortableContext } from '@dnd-kit/sortable'
import { useMemo } from 'react'

export default interface Props {
  column: Column
  jobs: JobCard[]
}

export const ColumnContainer = (props: Props) => {
  const { column, jobs } = props
  const jobsIds = useMemo(() => {
    return jobs.map((job) => job.id)
  }, [jobs])
  const { setNodeRef } = useDroppable({
    id: column.id,
    data: {
      type: 'Column',
      column,
    },
  })

  return (
    <SortableContext items={jobsIds}>
      <div
        ref={setNodeRef}
        className="relative h-[590px] w-[220px] p-4 bg-[#914fe7] rounded-xl flex flex-col gap-y-4 overflow-y-auto"
      >
        <h2 className="text-white">{column.title}</h2>
        <div className="absolute top-[40px] left-0 right-0 bottom-0 bg-[radial-gradient(rgb(0_0_0_/_0.2)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        {jobs.map((job) => (
          <JobCardComponent key={job.id} job={job} />
        ))}
      </div>
    </SortableContext>
  )
}
