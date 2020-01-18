import { CreateEventDto } from "./dto/createEvent.dto";
import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  ParseIntPipe,
  Patch,
  UsePipes,
  ValidationPipe,
  Delete,
  Res,
  HttpStatus
} from "@nestjs/common";
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
  @UsePipes(ValidationPipe)
  async createEvent(@Body() createEventDto: CreateEventDto): Promise<Event> {
    return await this.eventService.createEvent(createEventDto);
  }
  @Get(":id")
  async getEventById(@Param("id") id: string): Promise<Event> {
    return await this.eventService.getById(id);
  }
  @Put(":id")
  @UsePipes(ValidationPipe)
  async updateEvent(@Body() eventDTO: CreateEventDto) {
    return await this.eventService.updateById(eventDTO);
  }
  @Delete(":id")
  async deleteEvent(@Param("id") id: string) {
    await this.eventService.deleteById(id);
  }
}
