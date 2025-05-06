import { JobStatus, KanbanJob } from '@prisma/client'
import { JobsRepository } from '@/repositories/jobs-repository'
import { UsersRepository } from '@/repositories/users-repository'
import { ResourceNotFoundError } from '@/errors/resource-not-found'

interface FetchKanbanJobsRequest {
  userId: string
}

interface FetchKanbanJobsResponse {
  jobs: Record<JobStatus, KanbanJob[]>
}

export class FetchKanbanJobs {
  constructor(
    private jobsrepository: JobsRepository,
    private usersRepository: UsersRepository,
  ) {}

  async execute({
    userId,
  }: FetchKanbanJobsRequest): Promise<FetchKanbanJobsResponse> {
    const doesUserExists = this.usersRepository.findById(userId)

    if (!doesUserExists) {
      throw new ResourceNotFoundError()
    }

    const jobs = await this.jobsrepository.findManyKanbanByUserId(userId)

    return {
      jobs,
    }
  }
}
