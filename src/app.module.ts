import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { EventsModule } from "./events/events.module";
import { MongooseModule } from "@nestjs/mongoose";
import * as dotenv from "dotenv";
dotenv.config();
const options = {
  useNewUrlParser: true
};
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI, options),
    EventsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
