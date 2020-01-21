import { EventSchema } from "./events.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";
import { EventsService } from "./events.service";
import { EventsController } from "./events.controller";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Event", schema: EventSchema }])
  ],
  providers: [EventsService],
  controllers: [EventsController]
})
export class EventsModule {}
