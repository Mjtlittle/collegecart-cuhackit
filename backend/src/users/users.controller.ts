import {
  Controller,
  Get,
  Req,
  Res,
  UseGuards,
  Request,
  Response,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth/jwt-auth.guard';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getMe(@Req() req: Request, @Res() res: Response): any {
    return;
  }

  @Get('test')
  test() {
    this.userService.create({
      provider: 'google',
      providerId: 'a',
      username: 'test',
      name: 'test',
    });
  }
}
