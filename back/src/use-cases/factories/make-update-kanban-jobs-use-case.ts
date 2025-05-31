import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { UpdateKanbanJobsUseCase } from '../update-kanban-jobs'
import { PrismaKanbanRepository } from '@/repositories/prisma/prisma-kanban-repository'

export function makeUpdateKanbanJobsUseCase() {
  const kanbanRepository = new PrismaKanbanRepository()
  const usersRepository = new PrismaUsersRepository()
  const useCase = new UpdateKanbanJobsUseCase(usersRepository, kanbanRepository)

  return useCase
}
