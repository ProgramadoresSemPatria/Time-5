import { FastifyInstance } from 'fastify'
import { verifyJWT } from '@/middlewares/verify-jwt' // Se necessário, você pode proteger a rota com JWT
import { createCheckout } from './create-checkout'

export async function stripeRoutes(app: FastifyInstance) {
  // Rota para criar a sessão de checkout
  app.post('/create-checkout', { onRequest: [verifyJWT] }, createCheckout) // Proteger com JWT, se necessário
}
