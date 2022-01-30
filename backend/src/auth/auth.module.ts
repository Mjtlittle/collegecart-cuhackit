import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { GoogleOauthModule } from './google-oauth/google-oauth.module';
import { JwtAuthModule } from './jwt-auth/jwt-auth.module';

@Module({
  imports: [UsersModule, GoogleOauthModule, JwtAuthModule, ConfigModule],
  providers: [AuthService],
  controllers: [],
})
export class AuthModule {}
