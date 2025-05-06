import { FastifyInstance } from 'fastify'
import { create } from './create'
import { verifyJWT } from '../../../middlewares/verify-jwt'
import { getJob } from './get'
import { deleteJob } from './delete'
import { updateJob } from './update'
import { fetchJobs } from './fetch'
import { fetchKanbanJobs } from './fetchKanban'

export async function jobsRoutes(app: FastifyInstance) {
  app.get('/jobs/:jobId', { onRequest: [verifyJWT] }, getJob)
  app.get('/jobs', { onRequest: [verifyJWT] }, fetchJobs)
  app.get('/kanbanjobs', { onRequest: [verifyJWT] }, fetchKanbanJobs)

  app.post('/jobs', { onRequest: [verifyJWT] }, create)
  app.post('/jobs/:jobId', { onRequest: [verifyJWT] }, deleteJob)
  app.put('/jobs/:jobId', { onRequest: [verifyJWT] }, updateJob)
}
