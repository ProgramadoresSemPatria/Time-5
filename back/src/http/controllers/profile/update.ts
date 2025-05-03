import type { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "@/lib/prisma"; // adjust path as needed

export async function updateProfile(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { userId, phone, location, website } = request.body as {
    userId: string;
    phone?: string;
    location?: string;
    website?: string;
  };

  try {
    const updatedProfile = await prisma.profile.upsert({
      where: { userId },
      update: { phone, location, website },
      create: { userId, phone, location, website },
    });

    return reply.send(updatedProfile);
  } catch (err) {
    request.log.error(err);
    return reply.status(500).send({ error: "Failed to update profile" });
  }
}
