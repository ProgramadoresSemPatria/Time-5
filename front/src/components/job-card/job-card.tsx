import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import clsx from 'clsx'
import { JobCard as JobCardType } from './types'

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

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={{
          transition,
          transform: CSS.Translate.toString(transform),
        }}
        className={
          'opacity-30 bg-gray-400 px-2 py-7 shadow-md rounded-xl w-full border border-transparent'
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
        'relative z-10 px-2 py-4 bg-white shadow-md rounded-xl w-full border border-transparent hover:border-gray-600 cursor-pointer',
        isDragging && 'opacity-50',
      )}
    >
      <div className="flex items-center justify-between">{job.content}</div>
    </div>
  )
}
