import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { CreateJobUseCase } from '../../../use-cases/create-job'
import { PrismaJobsRepository } from '../../../repositories/prisma/prisma-jobs-repository'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createJobBodySchema = z.object({
    companyName: z.string(),
    application_status: z.enum([
      'APPLIED',
      'INTERVIEWING',
      'OFFERED',
      'REJECTED',
      'ACCEPTED',
    ]),
    description: z.string(),
    link: z.string(),
  })

  // eslint-disable-next-line
  const { companyName, application_status, description, link } =
    createJobBodySchema.parse(request.body)

  const userId = request.user.sub
  if (!userId) {
    return reply.status(401).send({ error: 'Unauthorized' })
  }

  const jobsRepository = new PrismaJobsRepository()
  const usersRepository = new PrismaUsersRepository()
  const createJobUseCase = new CreateJobUseCase(jobsRepository, usersRepository)

  await createJobUseCase.execute({
    companyName,
    // eslint-disable-next-line
    application_status,
    description,
    link,
    userId,
  })

  return reply.status(201).send()
}
