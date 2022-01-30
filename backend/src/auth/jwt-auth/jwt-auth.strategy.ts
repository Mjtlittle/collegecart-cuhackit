import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtPayload } from '../types';
import { UsersService } from '../../users/users.service';

@Injectable()
export class JwtAuthStrategy extends PassportStrategy(Strategy) {
  private usersService: UsersService;
  constructor(configService: ConfigService, usersService: UsersService) {
    const extractJwtFromCookie = (req) => {
      let token = null;
      if (req && req.cookies) {
        token = req.cookies['jwt'];
      }
      return token;
    };

    super({
      jwtFromRequest: extractJwtFromCookie,
      ignoreExpiration: true,
      secretOrKey: configService.get<string>('JWT_SECRET'),
    });

    this.usersService = usersService;
  }

  extractJwtFromCookie(req) {
    let token = null;
    if (req && req.cookies) {
      token = req.cookies['jwt'];
    }
    return token;
  }

  async validate(payload: JwtPayload) {
    const user = await this.usersService.findOne({
      where: { id: payload.user_id },
    });
    return user;
  }
}
