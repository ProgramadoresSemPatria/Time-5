import { Prisma, Job, JobStatus, KanbanJob } from '@prisma/client'
import { JobsRepository } from '../jobs-repository'
import { prisma } from '../../lib/prisma'

export class PrismaJobsRepository implements JobsRepository {
  async findManyByUserId(userId: string): Promise<Job[]> {
    const jobs = await prisma.job.findMany({
      where: { userId },
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

  async update(id: string, data: Prisma.JobUpdateInput): Promise<Job> {
    const job = await prisma.job.update({
      where: { id },
      data,
    })

    return job
  }

  async delete(id: string) {
    await prisma.job.delete({
      where: {
        id,
      },
    })
  }

  async findById(id: string) {
    const job = await prisma.job.findUnique({
      where: {
        id,
      },
    })

    return job
  }

  async create(data: Prisma.JobUncheckedCreateInput): Promise<Job> {
    const job = await prisma.job.create({
      data,
    })

    await prisma.kanbanJob.updateMany({
      where: {
        userId: data.userId,
        status: data.application_status,
      },
      data: {
        position: {
          increment: 1,
        },
      },
    })

    await prisma.kanbanJob.create({
      data: {
        userId: data.userId,
        jobId: job.id,
        status: job.application_status,
        position: 0,
      },
    })

    return job
  }
}
