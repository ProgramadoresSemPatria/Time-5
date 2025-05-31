import { kanbanJob } from '@/use-cases/update-kanban-jobs'
import { JobStatus, KanbanJob } from '@prisma/client'

export interface KanbanRepository {
  findManyKanbanByUserId(
    userId: string,
  ): Promise<Record<JobStatus, KanbanJob[]>>
  findManyByUserId(userId: string, jobIds: string[]): Promise<KanbanJob[]>
  updateMany(userId: string, kanbanJobs: kanbanJob[]): Promise<void>
}
