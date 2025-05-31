import { PrismaJobsRepository } from '@/repositories/prisma/prisma-jobs-repository'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { FetchJobsUseCase } from '../fetch-jobs'

export async function makeFetchJobsUseCase() {
  const prismaJobsRepository = new PrismaJobsRepository()
  const prismaUsersRepository = new PrismaUsersRepository()
  const fetchJobsHistoryUseCase = new FetchJobsUseCase(
    prismaJobsRepository,
    prismaUsersRepository,
  )

  return fetchJobsHistoryUseCase
}
