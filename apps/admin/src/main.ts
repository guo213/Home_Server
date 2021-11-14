import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AdminModule } from './admin.module';

const PORT = process.env.ADMIN_PORT;

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

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    allowedHeaders: ['Authorization', 'X-Requested-with', 'withCredentials'],
    optionsSuccessStatus: 204,
  });
  await app.listen(PORT, '127.0.0.1');
  console.log(`lesten in http://127.0.0.1:${PORT}/api-docs`);
}
bootstrap();
