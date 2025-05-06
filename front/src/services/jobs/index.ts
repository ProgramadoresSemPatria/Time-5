import { api } from '@/lib/axios'

export const fetchJobs = async () => {
  const { data } = await api.get('/jobs')

  return data
}

export const fetchKanbanJobs = async () => {
  const { data } = await api.get('/kanbanjobs')

  return data
}
