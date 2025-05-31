import { PrismaJobsRepository } from '@/repositories/prisma/prisma-jobs-repository'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { CreateJobUseCase } from '../create-job'

export function makeCreateJobUseCase() {
  const jobsRepository = new PrismaJobsRepository()
  const usersRepository = new PrismaUsersRepository()
  const useCase = new CreateJobUseCase(jobsRepository, usersRepository)

  return useCase
}
