export type ApiError = {
  message: string
  error?: string
  errors?: Record<string, string[]>
}
