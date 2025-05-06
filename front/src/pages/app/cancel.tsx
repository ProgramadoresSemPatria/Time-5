import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Cancel() {
  const navigate = useNavigate()

  useEffect(() => {
    // Redireciona para a página principal após 5 segundos
    const timer = setTimeout(() => {
      navigate('/')
    }, 5000)

    // Limpa o timer se o componente for desmontado antes do tempo
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-3xl font-bold text-red-600">Pagamento cancelado</h1>
      <p className="mt-4 text-lg text-gray-700">
        O pagamento foi cancelado. Você será redirecionado para a página
        principal em breve.
      </p>
    </div>
  )
}
