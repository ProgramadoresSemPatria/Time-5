import { StripeProvider } from '@/providers/stripe'

interface CreateCheckoutSessionInput {
  testeId: string
  assinatura: boolean
}

export class CreateCheckoutSessionUseCase {
  constructor(private stripeProvider: StripeProvider) {}

  async execute({ testeId, assinatura }: CreateCheckoutSessionInput) {
    const priceId = assinatura
      ? process.env.STRIPE_SUBSCRIPTION_PRICE_ID
      : process.env.STRIPE_PRICE_ID

    const session = await this.stripeProvider.createCheckoutSession({
      priceId,
      metadata: { testeId },
      isSubscription: assinatura,
    })

    return { sessionId: session.id }
  }
}
