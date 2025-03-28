import { compare } from 'bcryptjs'
import { UsersRepository } from '../repositories/users-repository'
import { User } from '@prisma/client'

export interface SignInUseCaseRequest {
  email: string
  password: string
}

export interface SignInUseCaseResponse {
  user: User
}

export class SignInUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    email,
    password,
  }: SignInUseCaseRequest): Promise<SignInUseCaseResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new Error('User not found.')
    }

    const doesPasswordMatch = await compare(password, user.password)

    if (!doesPasswordMatch) {
      throw new Error('Password does not match')
    }

    return { user }
  }
}
