import { ResourceNotFoundError } from '@/errors/resource-not-found'
import { UnauthorizedError } from '@/errors/unauthorized'
import { KanbanRepository } from '@/repositories/kanban-respostory'
import { UsersRepository } from '@/repositories/users-repository'

export interface kanbanJob {
  id: string
  columnId: string
}

export interface UpdateKanbanJobsUseCaseRequest {
  userId: string
  kanbanJobs: kanbanJob[]
}

export class UpdateKanbanJobsUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private kanbanRepository: KanbanRepository,
  ) {}

  async execute({
    userId,
    kanbanJobs,
  }: UpdateKanbanJobsUseCaseRequest): Promise<void> {
    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new ResourceNotFoundError()
    }

    const jobIds = kanbanJobs.map((j) => j.id)
    const kanbanjobs = await this.kanbanRepository.findManyByUserId(
      userId,
      jobIds,
    )

    if (kanbanjobs.length !== jobIds.length) {
      throw new UnauthorizedError()
    }

    await this.kanbanRepository.updateMany(userId, kanbanJobs)
  }
}
