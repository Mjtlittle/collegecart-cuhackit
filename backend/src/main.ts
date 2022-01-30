import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
    bufferLogs: true,
  });
  app.enableCors({
    origin: ['http://127.0.0.1:3000'],
    // allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });
  app.useLogger(new Logger());
  app.use(cookieParser());

  await app.listen(3001);
}
bootstrap();
