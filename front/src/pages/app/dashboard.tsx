import { ColumnContainer } from '@/components/column/column'
import { Column } from '@/components/column/types'
import { JobCard } from '@/components/job-card/job-card'
import { JobCard as JobCardType } from '@/components/job-card/types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  DndContext,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { Search } from 'lucide-react'
import { useState } from 'react'
import { createPortal } from 'react-dom'

export function Dashboard() {
  const [activeJob, setActiveJob] = useState<JobCardType | null>(null)
  const [columns] = useState<Column[]>([
    { id: 'id-column-01', title: 'Applied' },
    { id: 'id-column-02', title: 'Interviewing' },
    { id: 'id-column-03', title: 'Offered' },
    { id: 'id-column-04', title: 'Rejected' },
    { id: 'id-column-05', title: 'Accepted' },
  ])
  const [jobCard, setJobCard] = useState<JobCardType[]>([
    { id: 'id-job-01', columnId: 'id-column-02', content: 'job na amazon' },
    { id: 'id-job-02', columnId: 'id-column-01', content: 'job no carrefour' },
    { id: 'id-job-03', columnId: 'id-column-03', content: 'job na tesla' },
    { id: 'id-job-04', columnId: 'id-column-03', content: 'job na sla02' },
    { id: 'id-job-05', columnId: 'id-column-03', content: 'job na sla03' },
  ])

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    }),
  )

  function OnDragStart(event: DragStartEvent) {
    if (event.active.data.current?.type === 'Job') {
      setActiveJob(event.active.data.current.job)
    }
  }

  function onDragEnd() {
    // const { active } = event
    setActiveJob(null)
    // console.log(jobCard.findIndex((job) => job.id === active.id))
  }

  function onDragOver(event: DragOverEvent) {
    const { active, over } = event

    if (!over) return

    const activeId = active.id
    const overId = over.id

    if (activeId === overId) return

    const isActiveJob = active.data.current?.type === 'Job'
    const isOverAJob = over.data.current?.type === 'Job'

    if (!isActiveJob) return

    if (isActiveJob && isOverAJob) {
      setJobCard((jobs) => {
        const activeIndex = jobs.findIndex((job) => job.id === activeId)
        const overIndex = jobs.findIndex((job) => job.id === overId)

        jobs[activeIndex].columnId = jobs[overIndex].columnId

        return arrayMove(jobs, activeIndex, overIndex)
      })
    }

    const isOverAColumn = over.data.current?.type === 'Column'

    if (isActiveJob && isOverAColumn) {
      setJobCard((jobs) => {
        const activeIndex = jobs.findIndex((job) => job.id === activeId)

        jobs[activeIndex].columnId = overId

        return arrayMove(jobs, activeIndex, activeIndex)
      })
    }
  }
  // 6912A9
  return (
    <div className="flex flex-col min-h-screen w-full items-center m-auto bg-white">
      <div className="rounded-lg border border-muted p-4 pb-8 mt-2 shadow-sm bg-[#dcb7fa]/30">
        <DndContext
          onDragStart={OnDragStart}
          onDragEnd={onDragEnd}
          onDragOver={onDragOver}
          sensors={sensors}
        >
          <div className="w-full flex justify-center pt-6 gap-2">
            <div className="relative w-1/3">
              <Input className="pr-10 !bg-white" placeholder="Search jobs" />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <Button className="bg-[#6912A9] hover:bg-[#551385]">
              Add new job
            </Button>
          </div>
          <div className="mt-12 flex gap-6">
            {columns.map((col) => (
              <ColumnContainer
                column={col}
                key={col.id}
                jobs={jobCard.filter((job) => job.columnId === col.id)}
              />
            ))}
          </div>
          {createPortal(
            <DragOverlay>
              {activeJob && <JobCard job={activeJob} />}
            </DragOverlay>,
            document.body,
          )}
        </DndContext>
      </div>
    </div>
  )
}
