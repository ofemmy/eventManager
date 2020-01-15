import { CreateEventDto } from "./dto/createEvent.dto";

import { Repository, EntityRepository } from "typeorm";
import { Event } from "./events.entity";

@EntityRepository(Event)
export class EventRepository extends Repository<Event> {
  async createEvent(createEventDto: CreateEventDto): Promise<Event> {
    const { title, description } = createEventDto;
    const event = new Event();
    event.title = title;
    event.description = description;
    await event.save();
    return event;
  }
  async getEvents():Promise<Event[]>{
      return await this.find();
  }
}
