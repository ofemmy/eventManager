import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as dotenv from "dotenv";
import { Logger, ValidationPipe } from "@nestjs/common";
dotenv.config();
const port = process.env.PORT || 8080;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true
    })
  );
  await app.listen(port);
}
bootstrap();
