import { NestFactory } from '@nestjs/core';
import { AppModule } from './api-gateway.module';

async function bootstrap() {
  const port = Number(process.env.API_GATEWAY_PORT) || 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(port, '0.0.0.0');
}
bootstrap();
