// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Bind to all interfaces unless HOST is explicitly set
  const host = process.env.HOST ?? '0.0.0.0'; 
  // Parse the PORT env var, defaulting to 3000 if it's missing or invalid
  const port = parseInt(process.env.PORT ?? '3000', 10);

  await app.listen(port, host);
  console.log(`Listening on http://${host}:${port}`);
}
bootstrap();
