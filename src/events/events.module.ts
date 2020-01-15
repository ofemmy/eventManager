import { Event } from "./events.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { EventsService } from "./events.service";
import { EventsController } from "./events.controller";
import { EventRepository } from "./events.repository";

@Module({
  imports: [TypeOrmModule.forFeature([Event, EventRepository])],
  providers: [EventsService],
  controllers: [EventsController]
})
export class EventsModule {}
