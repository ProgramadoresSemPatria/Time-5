import { JobStatus, KanbanJob } from '@prisma/client'
import { KanbanRepository } from '../kanban-respostory'
import { prisma } from '@/lib/prisma'
import { kanbanJob } from '@/use-cases/update-kanban-jobs'
import { ProfileStatus } from '@/interface'

export class PrismaKanbanRepository implements KanbanRepository {
  async updateMany(userId: string, kanbanJobs: kanbanJob[]): Promise<void> {
    const aggregatedJobsByStatus: Record<string, kanbanJob[]> = {}

    kanbanJobs.forEach((job) => {
      if (!aggregatedJobsByStatus[job.columnId]) {
        aggregatedJobsByStatus[job.columnId] = []
      }
      aggregatedJobsByStatus[job.columnId].push(job)
    })

    const updatePromises: Promise<KanbanJob>[] = []

    for (const jobStatus in aggregatedJobsByStatus) {
      const jobsInStatusColumn = aggregatedJobsByStatus[jobStatus]

      jobsInStatusColumn.forEach((job, position) => {
        updatePromises.push(
          prisma.kanbanJob.update({
            where: {
              userId_jobId: {
                userId,
                jobId: job.id,
              },
            },
            data: {
              position,
              status: jobStatus as ProfileStatus,
            },
          }),
        )
      })
    }

    await Promise.all(updatePromises)
  }

  async findManyByUserId(
    userId: string,
    jobIds: string[],
  ): Promise<KanbanJob[]> {
    const jobs = await prisma.kanbanJob.findMany({
      where: {
        jobId: { in: jobIds },
        userId,
      },
    })

    return jobs
  }

  async findManyKanbanByUserId(
    userId: string,
  ): Promise<Record<JobStatus, KanbanJob[]>> {
    const kanbanjobs = await prisma.kanbanJob.findMany({
      where: {
        userId,
      },
    })

    const profileStatuses: JobStatus[] = [
      'APPLIED',
      'INTERVIEWING',
      'OFFERED',
      'REJECTED',
      'ACCEPTED',
    ]

    const formattedStatus = profileStatuses.reduce(
      (acc, status) => {
        acc[status] = kanbanjobs.filter((job) => job.status === status)
        return acc
      },
      {} as Record<JobStatus, KanbanJob[]>,
    )

    return formattedStatus
  }
}
