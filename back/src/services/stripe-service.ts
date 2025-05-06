import Stripe from 'stripe'

export class StripeService {
  private stripe: Stripe

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2025-03-31.basil',
    })
  }

  // Validate URL to ensure it starts with http:// or https://
  private validateUrl(url: string | undefined): string {
    if (!url) {
      // Fallback to localhost if no URL is provided
      return 'http://localhost:3000'
    }

    // Ensure URL starts with http:// or https://
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      return `https://${url}`
    }

    return url
  }

  async createCheckoutSession({
    priceId,
    isSubscription,
    metadata,
  }: {
    priceId: string
    isSubscription: boolean
    metadata: Record<string, any>
  }) {
    try {
      // Get base URL with validation
      const baseUrl = this.validateUrl(process.env.CLIENT_URL)

      const session = await this.stripe.checkout.sessions.create({
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: isSubscription ? 'subscription' : 'payment',
        payment_method_types: isSubscription ? ['card'] : ['card', 'boleto'],
        success_url: `${baseUrl}/success`,
        cancel_url: `${baseUrl}/cancel`,
        metadata,
      })

      return { id: session.id }
    } catch (error) {
      console.error('Error creating checkout session:', error)
      throw new Error('Failed to create checkout session')
    }
  }
}
