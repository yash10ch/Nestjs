import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,               //this will remove any extra fields that are not in the DTO
    forbidNonWhitelisted:true,    //this will throw an error if there are extra fields that are not in the DTO
    transform:true,               //this will transform the incoming data to the type specified in the DTO (e.g. object to instance of a class)
  }));


  // swagger configuration
  const config = new DocumentBuilder()
  .setVersion('1.0')
  .setTitle('NestJS API')
  .setDescription('NestJS API description')
  .setLicense('MIT', 'https://opensource.org/licenses/MIT')
  .addServer('http://localhost:3000')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
