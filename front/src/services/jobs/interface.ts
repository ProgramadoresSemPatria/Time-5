export type ApplicationStatus =
  | 'APPLIED'
  | 'INTERVIEWING'
  | 'OFFERED'
  | 'REJECTED'
  | 'ACCEPTED'

export interface KanbanJobCard {
  id: string
  userId: string
  jobId: string
  status: string
  position: number
}

export interface KanbanJobResponse {
  jobs: Record<ApplicationStatus, KanbanJobCard[]>
}

export interface Job {
  id: string
  companyName: string
  application_status: ApplicationStatus
  description: string
  feedback?: number
  link?: string
  createdAt: Date
  updatedAt: Date
  userId: string
}

export interface JobsResponse {
  jobs: Job[]
}
