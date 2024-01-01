import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {config} from 'dotenv'

async function bootstrap() {
  config({path :'./../.env'})
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api')

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
