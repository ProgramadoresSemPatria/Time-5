import { makeFetchKanbanJobsUseCase } from '@/use-cases/factories/make-fetch-kanban-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function fetchKanbanJobs(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const fetchKanbanJobs = await makeFetchKanbanJobsUseCase()

  const { jobs } = await fetchKanbanJobs.execute({
    userId: request.user.sub,
  })

  return reply.status(200).send({
    jobs,
  })
}
