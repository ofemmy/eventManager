import { CreateEventDto } from "./dto/createEvent.dto";
import { Controller, Post, Body, Get, Put } from "@nestjs/common";
import { EventsService } from "./events.service";
import { Event } from "./events.entity";
import { async } from "rxjs/internal/scheduler/async";

@Controller("events")
export class EventsController {
  constructor(private eventService: EventsService) {}
  @Get()
  async getEvents(): Promise<Event[]> {
    return await this.eventService.getEvents();
  }
  @Post()
  async createEvent(@Body() createEventDto: CreateEventDto): Promise<Event> {
    return await this.eventService.createEvent(createEventDto);
  }
  @Get(':id')
  async getEventById(){
      //TODO get by id
  }
  @Put()
async updateEvent(@Body() event:Partial<CreateEventDto>){

}
}
