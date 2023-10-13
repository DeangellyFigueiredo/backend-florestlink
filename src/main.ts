import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
  });

  await app.listen(2023, () => {
    console.log('Servidor rodando em http://localhost:2023');
  });
}
bootstrap();
