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
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  private readonly logger = new Logger(UsersController.name);

  @Get('me')
  @UseGuards(JwtAuthGuard)
  getMe(@Req() req: Request, @Res() res: Response): any {
    const user = req.user;
    return res.status(HttpStatus.OK).json(user);
  }
}
