import { ColumnContainer } from '@/components/column/column'
import { Column } from '@/components/column/types'
import { JobCard } from '@/components/job-card/job-card'
import { JobCard as JobCardType } from '@/components/job-card/types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { fetchJobs, fetchKanbanJobs, updateKanbanJobs } from '@/services/jobs'
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
import { Plus, Search } from 'lucide-react'
import { useState } from 'react'
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
  const [jobCard, setJobCard] = useState<JobCardType[]>([])

  const updateKanbanJobsMutations = useMutation({
    mutationFn: updateKanbanJobs,
  })

  const fetchJobsMutation = useMutation({
    mutationFn: fetchJobs,
  })

  const fetchKanbanJobsMutation = useMutation({
    mutationFn: fetchKanbanJobs,
    onSuccess: async (data) => {
      const fetchedJobsData = await fetchJobsMutation.mutateAsync()

      const jobsData = data.jobs

      const allJobCards: JobCardType[] = []

      Object.entries(jobsData).forEach(([status, jobs]) => {
        const sortedJobs = [...jobs].sort((a, b) => a.position - b.position)

        sortedJobs.forEach((job) => {
          const correspondentJobIndex =
            fetchedJobsData.jobs.findIndex(
              (jobinfo) => jobinfo.id === job.jobId,
            ) ?? null

          allJobCards.push({
            id: job.jobId,
            columnId: status,
            content: fetchedJobsData.jobs[correspondentJobIndex].companyName,
          })
        })
      })

      setJobCard(allJobCards)
    },
  })

  useQuery({
    queryKey: ['jobCards'],
    queryFn: async () => fetchKanbanJobsMutation.mutateAsync(),
  })

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
    updateKanbanJobsMutations.mutate(jobCard)
    console.log(jobCard)
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
    <div className="flex flex-col min-h-screen w-full items-center m-auto bg-slate-50">
      <div className="rounded-xl border border-slate-200 p-6 pb-8 mt-2 shadow-sm bg-white w-[98%]">
        <DndContext
          onDragStart={OnDragStart}
          onDragEnd={onDragEnd}
          onDragOver={onDragOver}
          sensors={sensors}
        >
          <div className="w-full flex justify-center pt-2 gap-3">
            <div className="relative w-1/3">
              <Input
                className="pr-10 bg-slate-50 border-slate-200 rounded-lg focus-visible:ring-violet-500"
                placeholder="Search jobs"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            </div>
            <Button className="bg-violet-600 hover:bg-violet-700 rounded-lg flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add new job
            </Button>
          </div>

          <div className="mt-7 flex gap-4">
            {columns.map((col) => (
              <div key={col.id} className="flex-1">
                <div className="mb-3 font-medium text-sm text-slate-500 uppercase tracking-wide">
                  {col.title}
                </div>
                <ColumnContainer
                  column={col}
                  jobs={jobCard.filter((job) => job.columnId === col.id)}
                />
              </div>
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
