import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from '../../users/users.module';
import { JwtAuthModule } from '../jwt-auth/jwt-auth.module';
import { GoogleOauthController } from './google-oauth.controller';
import { GoogleOauthStrategy } from './google-oauth.strategy';

@Module({
  imports: [UsersModule, JwtAuthModule, ConfigModule],
  providers: [GoogleOauthStrategy],
  controllers: [GoogleOauthController],
})
export class GoogleOauthModule {}
