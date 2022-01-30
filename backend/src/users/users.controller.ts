import {
  Controller,
  Get,
  Req,
  Res,
  UseGuards,
  Logger,
  HttpStatus,
} from '@nestjs/common';

import { Request, Response } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth/jwt-auth.guard';
import { privateDataFromUser, PrivateUserDataDto } from './dto/UserData.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  private readonly logger = new Logger(UsersController.name);

  @Get('me')
  @UseGuards(JwtAuthGuard)
  getMe(@Req() req: Request, @Res() res: Response) {
    const user_data = privateDataFromUser(req.user as User);

    return res.status(HttpStatus.OK).json(user_data);
  }
}
