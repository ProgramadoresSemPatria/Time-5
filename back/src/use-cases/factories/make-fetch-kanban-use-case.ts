import { PrismaJobsRepository } from '@/repositories/prisma/prisma-jobs-repository'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { FetchKanbanJobs } from '../fetch-kanban-jobs'

export async function makeFetchKanbanJobsUseCase() {
  const prismaJobsRepository = new PrismaJobsRepository()
  const prismaUsersRepository = new PrismaUsersRepository()
  const useCase = new FetchKanbanJobs(
    prismaJobsRepository,
    prismaUsersRepository,
  )

  return useCase
}
