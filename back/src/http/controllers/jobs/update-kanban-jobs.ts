import { makeUpdateKanbanJobsUseCase } from '@/use-cases/factories/make-update-kanban-jobs-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function updateKanbanJobs(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const updateKanbanJobsUseCase = makeUpdateKanbanJobsUseCase()

  const userId = request.user.sub

  const bodySchema = z.array(
    z.object({
      id: z.string().uuid(),
      columnId: z.string(),
    }),
  )

  const body = bodySchema.parse(request.body)

  try {
    await updateKanbanJobsUseCase.execute({ userId, kanbanJobs: body })
    return reply.status(200).send({})
  } catch (error) {
    console.log(error)
    return reply.status(400).send({
      message: 'Internal server error',
    })
  }
}
