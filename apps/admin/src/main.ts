import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AdminModule } from './admin.module';

const PORT = 3001;

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);

  const config = new DocumentBuilder()
    .setTitle('智能家居管理')
    .setDescription('ADMIN-API-DOC')
    .setVersion('1.0')
    // .addTag('API')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(PORT);
  console.log(`lesten in http://localhost:${PORT}/api-docs`);
}
bootstrap();
