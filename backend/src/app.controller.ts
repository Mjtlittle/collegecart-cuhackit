import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Logger } from '@nestjs/common';
import { GoogleOauthGuard } from './auth/google-oauth/google-oauth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  @UseGuards(GoogleOauthGuard)
  test() {
    return 'hello';
  }
}
