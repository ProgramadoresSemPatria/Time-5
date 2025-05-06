export interface StripeProvider {
  createCheckoutSession(params: {
    priceId: string
    metadata: Record<string, any>
    isSubscription: boolean
  }): Promise<{ id: string }>
}
