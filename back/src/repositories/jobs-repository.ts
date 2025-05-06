import { UpdateJobUseCaseRequest } from '@/use-cases/update-job'
import { Job, JobStatus, KanbanJob, Prisma } from '@prisma/client'

export interface JobsRepository {
  create(data: Prisma.JobUncheckedCreateInput): Promise<Job>
  findById(id: string): Promise<Job | null>
  findManyKanbanByUserId(
    userId: string,
  ): Promise<Record<JobStatus, KanbanJob[]>>
  findManyByUserId(userId: string): Promise<Job[]>
  delete(id: string): Promise<void>
  update(
    id: string,
    data: Omit<Omit<UpdateJobUseCaseRequest, 'jobId'>, 'userId'>,
  ): Promise<Job>
}
