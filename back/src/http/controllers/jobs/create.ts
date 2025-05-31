import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeCreateJobUseCase } from '@/use-cases/factories/make-create-job-use-case'

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

  const { companyName, application_status, description, link } =
    createJobBodySchema.parse(request.body)

  const userId = request.user.sub
  if (!userId) {
    return reply.status(401).send({ error: 'Unauthorized' })
  }

  const createJobUseCase = makeCreateJobUseCase()

  await createJobUseCase.execute({
    companyName,
    application_status,
    description,
    link,
    userId,
  })

  return reply.status(201).send()
}
