import { NestFactory } from '@nestjs/core';

import { ConfigService } from '@nestjs/config';
import { AppModule } from './auth-service.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);
  const port = Number(config.get('API_PORT')) || 3001;

  await app.listen(port, '0.0.0.0'); 
}
bootstrap();
