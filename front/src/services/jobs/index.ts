import { api } from '@/lib/axios'
import { JobsResponse, KanbanJobResponse } from './interface'
import { JobCard } from '@/components/job-card/types'

export const fetchJobs = async (): Promise<JobsResponse> => {
  const { data } = await api.get<JobsResponse>('/jobs')

  return data
}

export const fetchKanbanJobs = async (): Promise<KanbanJobResponse> => {
  const { data } = await api.get<KanbanJobResponse>('/kanbanjobs')

  return data
}

export const updateKanbanJobs = async (data: JobCard[]): Promise<void> => {
  await api.put('/kanbanjobs', data)
}
