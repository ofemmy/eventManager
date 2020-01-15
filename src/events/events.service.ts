import { CreateEventDto } from "./dto/createEvent.dto";
import { EventRepository } from "./events.repository";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Event } from "./events.entity";

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(EventRepository)
    private readonly eventRepository: EventRepository
  ) {}
  async createEvent(createEventDto: CreateEventDto): Promise<Event> {
    return await this.eventRepository.createEvent(createEventDto);
  }
  async getEvents(): Promise<Event[]> {
    return await this.eventRepository.getEvents();
  }
}
