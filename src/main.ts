import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import AppModule from './app.module';
import { ValidationPipe } from './pipes/validation.pipe';

async function bootstrap() {
  const port = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Advanced backend')
    .setDescription('Rest api documentation')
    .setVersion('1.0.0')
    .addTag('Nest course')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port, () => console.log(`App started on port ${port}`));
}

bootstrap();
