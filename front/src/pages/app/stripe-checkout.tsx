import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

// Carregue a chave pública do Stripe
const stripePromise = loadStripe(import.meta.env.VITE_PUBLIC_STRIPE_PUB_KEY)

export default function StripeCheckout() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleCheckout() {
    try {
      setLoading(true)
      setError(null)

      const token = localStorage.getItem('accessTokenTime5')

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}create-checkout`,
        {
          priceId: import.meta.env.VITE_STRIPE_PRICE_ID,
          isSubscription: false,
          metadata: { userId: '123' },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )

      const { sessionId } = response.data

      if (!sessionId) {
        throw new Error('sessionId não retornado.')
      }

      const stripe = await stripePromise

      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId })
        if (error) {
          console.error(error.message)
          setError(error.message)
        }
      } else {
        setError('Stripe não foi carregado corretamente.')
      }
    } catch (err: any) {
      console.error('Erro ao iniciar checkout:', err)
      if (err.response) {
        console.error('Resposta de erro:', err.response.data)
        console.error('Status:', err.response.status)
      }
      setError(err.message || 'Ocorreu um erro ao processar o pagamento')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="stripe-checkout">
      {error && <div className="error-message">{error}</div>}
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="checkout-button"
      >
        {loading ? 'Processando...' : 'Pagar com Stripe'}
      </button>
    </div>
  )
}
