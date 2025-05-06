import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { FetchKanbanJobs } from '../fetch-kanban-jobs'
import { PrismaKanbanRepository } from '@/repositories/prisma/prisma-kanban-repository'

export async function makeFetchKanbanJobsUseCase() {
  const prismaKanbanRepository = new PrismaKanbanRepository()
  const prismaUsersRepository = new PrismaUsersRepository()
  const useCase = new FetchKanbanJobs(
    prismaUsersRepository,
    prismaKanbanRepository,
  )

  return useCase
}
