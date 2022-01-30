import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../types';

@Injectable()
export class JwtAuthService {
  constructor(private jwtService: JwtService) {}

  login(user) {
    const payload: JwtPayload = { user_id: user.id };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
