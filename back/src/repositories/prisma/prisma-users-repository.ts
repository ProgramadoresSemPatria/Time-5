import { User } from '@prisma/client'
import { SignUpUseCaseRequest } from '../../use-cases/sign-up'
import { UsersRepository } from '../users-repository'
import { prisma } from '../../lib/prisma'

export class PrismaUsersRepository implements UsersRepository {
  async findById(userId: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    })

    if (!user) {
      return null
    }

    return user
  }

  async create(data: SignUpUseCaseRequest): Promise<User> {
    const user = await prisma.user.create({
      data,
    })

    return user
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    })

    if (!user) {
      return null
    }

    return user
  }
}
