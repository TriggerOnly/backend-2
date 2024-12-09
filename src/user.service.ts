import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './User/User.module';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async fixProblems(): Promise<number> {
    const count = await this.userRepository.count({ where: { problems: true } });
    await this.userRepository.update({ problems: true }, { problems: false });
    return count;
  }
}