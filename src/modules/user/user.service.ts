import { Inject, Injectable } from '@nestjs/common';
import { UserInterface } from 'src/types/user.interface';
import { cryptPassword } from 'src/utils/security.utils';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<UserInterface>,
  ) {}

  async getById(id: string): Promise<UserInterface> {
    return this.userRepository.findOne({ where: { id } });
  }

  async getAll(): Promise<UserInterface[]> {
    return this.userRepository.find();
  }

  async create(user: UserInterface): Promise<UserInterface> {
    return this.userRepository.save({
      ...user,
      password: await cryptPassword(
        user.password,
        Number(process.env.SALT_ROUDS),
      ),
    });
  }

  async update(id: string, user: UserInterface): Promise<boolean> {
    return this.userRepository
      .update(id, user)
      .then(() => true)
      .catch(() => false);
  }

  async delete(id: string): Promise<boolean> {
    return this.userRepository
      .delete(id)
      .then(() => true)
      .catch(() => false);
  }

  async findByEmail(email: string): Promise<UserInterface> {
    return this.userRepository.findOne({ where: { email } });
  }
}
