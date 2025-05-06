import { makeFetchJobsUseCase } from '@/use-cases/factories/make-fetch-jobs-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function fetchJobs(request: FastifyRequest, reply: FastifyReply) {
  const fetchJobsUseCase = await makeFetchJobsUseCase()

  const { jobs } = await fetchJobsUseCase.execute({
    userId: request.user.sub,
  })

  return reply.status(200).send({
    jobs,
  })
}
