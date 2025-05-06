import type { FastifyReply, FastifyRequest } from 'fastify'
import { prisma } from '@/lib/prisma' // adjust path as needed

export async function updateProfile(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { userId, jobTitle, email, phone, location, website } =
    request.body as {
      userId: string
      jobTitle?: string
      email?: string
      phone?: string
      location?: string
      website?: string
    }

  try {
    const updatedProfile = await prisma.user.update({
      where: {
        id: userId,
      },
      data: { jobTitle, email, phone, location, website },
    })

    return reply.send(updatedProfile)
  } catch (err) {
    request.log.error(err)
    return reply.status(500).send({ error: 'Failed to update profile' })
  }
}
