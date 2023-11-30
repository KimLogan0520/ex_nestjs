import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap()
  .then(() => {
    console.log('✅ Nest application started.');
  })
  .catch((err) => {
    console.error('🚨 Error starting Nest application:', err);
  });
