import { JobStatus, KanbanJob } from '@prisma/client'
import { UsersRepository } from '@/repositories/users-repository'
import { ResourceNotFoundError } from '@/errors/resource-not-found'
import { KanbanRepository } from '@/repositories/kanban-respostory'

interface FetchKanbanJobsRequest {
  userId: string
}

interface FetchKanbanJobsResponse {
  jobs: Record<JobStatus, KanbanJob[]>
}

export class FetchKanbanJobs {
  constructor(
    private usersRepository: UsersRepository,
    private kanbanRepository: KanbanRepository,
  ) {}

  async execute({
    userId,
  }: FetchKanbanJobsRequest): Promise<FetchKanbanJobsResponse> {
    const doesUserExists = this.usersRepository.findById(userId)

    if (!doesUserExists) {
      throw new ResourceNotFoundError()
    }

    const jobs = await this.kanbanRepository.findManyKanbanByUserId(userId)

    return {
      jobs,
    }
  }
}
