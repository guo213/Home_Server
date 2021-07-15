import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';

const PORT = 3001;

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);
  await app.listen(PORT);
  console.log(`lesten in http://localhost:${PORT}`);
}
bootstrap();
