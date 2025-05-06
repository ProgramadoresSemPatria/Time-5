import { ColumnContainer } from '@/components/column/column'
import { Column } from '@/components/column/types'
import { JobCard } from '@/components/job-card/job-card'
import { JobCard as JobCardType } from '@/components/job-card/types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { fetchKanbanJobs } from '@/services/jobs'
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
import { useMutation, useQuery } from '@tanstack/react-query'
import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export function Dashboard() {
  const [activeJob, setActiveJob] = useState<JobCardType | null>(null)
  const [columns] = useState<Column[]>([
    { id: 'APPLIED', title: 'Applied' },
    { id: 'INTERVIEWING', title: 'Interviewing' },
    { id: 'OFFERED', title: 'Offered' },
    { id: 'REJECTED', title: 'Rejected' },
    { id: 'ACCEPTED', title: 'Accepted' },
  ])
  const [jobCard, setJobCard] = useState<JobCardType[]>([
    { id: 'APPLIED', columnId: 'id-column-02', content: 'job na amazon' },
    {
      id: 'INTERVIEWING',
      columnId: 'id-column-01',
      content: 'job no carrefour',
    },
    { id: 'OFFERED', columnId: 'id-column-03', content: 'job na sla02' },
    { id: 'REJECTED', columnId: 'id-column-03', content: 'job na tesla' },
    { id: 'ACCEPTED', columnId: 'id-column-03', content: 'job na sla03' },
  ])

  type JobStatus =
    | 'APPLIED'
    | 'INTERVIEWING'
    | 'OFFERED'
    | 'REJECTED'
    | 'ACCEPTED'

  type KanbanJob = {
    id: string
    userId: string
    jobId: string
    status: JobStatus
    position: number
  }

  type FetchKanbanJobsResponse = {
    jobs: Record<JobStatus, KanbanJob[]>
  }

  const fetchKanbanJobsMutation = useMutation()

  const { data, isSuccess } = useQuery<FetchKanbanJobsResponse>({
    queryKey: ['jobCards'],
    queryFn: () => fetchKanbanJobs,
  })

  useEffect(() => {
    if (isSuccess && data) {
      const jobsData = data.jobs

      const allJobCards: JobCardType[] = []

      Object.entries(jobsData).forEach(([status, jobs]) => {
        const sortedJobs = [...jobs].sort((a, b) => a.position - b.position)

        sortedJobs.forEach((job) => {
          allJobCards.push({
            id: job.jobId,
            columnId: status,
            content: job.jobId,
          })
        })
      })

      setJobCard(allJobCards)
    }
  }, [isSuccess, data])

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
    setActiveJob(null)
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
