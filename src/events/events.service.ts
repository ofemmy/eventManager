import { CreateEventDto } from "./dto/createEvent.dto";
import { EventRepository } from "./events.repository";
import {
  Injectable,
  Param,
  ParseIntPipe,
  HttpException,
  HttpStatus
} from "@nestjs/common";
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
  async getById(id: string): Promise<Event> {
    try {
      return await this.eventRepository.findOneOrFail(id);
    } catch (error) {
      throw new HttpException(
        `Resource with id ${id} not found`,
        HttpStatus.NOT_FOUND
      );
    }
  }
  async updateById(eventDTO: CreateEventDto) {
    const { id } = eventDTO;
    const evt = await this.getById(id);
    return await this.eventRepository.save({
      ...evt,
      ...eventDTO
    });

    // const res = await this.eventRepository.update(id, eventDTO);
    // if (res.raw.changedRows === 0) {
    //   throw new HttpException(`Invalid ID`, HttpStatus.BAD_REQUEST);
    // }
  }
  async deleteById(id:string){
    return await this.eventRepository.delete(id);
  }
}
