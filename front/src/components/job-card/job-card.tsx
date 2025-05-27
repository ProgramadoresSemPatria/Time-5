import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import clsx from 'clsx'
import { Calendar, MoreHorizontal } from 'lucide-react'
import type { JobCard as JobCardType } from './types'

type Props = {
  job: JobCardType
}

export const JobCard = ({ job }: Props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: job.id,
    data: {
      type: 'Job',
      job,
    },
  })

  const getCompanyColor = (companyName: string) => {
    const colors = [
      'bg-violet-100 text-violet-700',
      'bg-emerald-100 text-emerald-700',
      'bg-blue-100 text-blue-700',
      'bg-amber-100 text-amber-700',
      'bg-rose-100 text-rose-700',
      'bg-indigo-100 text-indigo-700',
    ]

    const hash = companyName.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0)
    }, 0)

    return colors[hash % colors.length]
  }

  const getCompanyInitials = (companyName: string) => {
    return companyName.substring(0, 2).toUpperCase()
  }

  const companyColor = getCompanyColor(job.content)
  const companyInitials = getCompanyInitials(job.content)
  const date = 'Applied 2 days ago'

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={{
          transition,
          transform: CSS.Translate.toString(transform),
        }}
        className={
          'opacity-30 bg-gray-100 px-4 py-9 shadow-md rounded-xl w-full border border-transparent'
        }
      />
    )
  }

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={clsx(
        'relative z-10 p-2 bg-white shadow-sm rounded-xl w-full border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all cursor-grab active:cursor-grabbing group select-none',
        isDragging && 'opacity-50',
      )}
    >
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="p-1 rounded-md hover:bg-slate-100">
          <MoreHorizontal className="h-4 w-4 text-slate-400" />
        </button>
      </div>

      <div className="flex items-start gap-3">
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-md ${companyColor} flex items-center justify-center font-semibold text-sm`}
        >
          {companyInitials}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-slate-800 truncate">{job.content}</h3>

          <div className="mt-2 flex flex-col gap-1.5">
            <div className="flex items-center text-xs text-slate-500">
              <Calendar className="h-3 w-3 mr-1.5" />
              <span>{date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
