import { StripeService } from '@/services/stripe-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function createCheckout(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  // Definindo o schema para validação do corpo da requisição
  const createCheckoutBodySchema = z.object({
    priceId: z.string(),
    isSubscription: z.boolean(),
    metadata: z.record(z.unknown()),
  })

  // Validando o corpo da requisição
  const { priceId, isSubscription, metadata } = createCheckoutBodySchema.parse(
    request.body,
  )

  // Obtendo o ID do usuário autenticado (do JWT ou outro mecanismo)
  const userId = request.user.sub
  if (!userId) {
    return reply.status(401).send({ error: 'Unauthorized' })
  }

  // Instanciando o serviço do Stripe para criação da sessão de checkout
  const stripeService = new StripeService()

  try {
    // Criando a sessão de checkout com o Stripe
    const session = await stripeService.createCheckoutSession({
      priceId,
      isSubscription,
      metadata,
    })

    // Retornando o ID da sessão de checkout para o cliente
    return reply.status(201).send({ sessionId: session.id })
  } catch (error) {
    console.error(error)
    return reply
      .status(500)
      .send({ error: 'Failed to create checkout session' })
  }
}
