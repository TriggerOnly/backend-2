import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('fix-problems')
  async fixProblems(): Promise<{ fixedCount: number }> {
    const fixedCount = await this.userService.fixProblems();
    return { fixedCount };
  }
}
