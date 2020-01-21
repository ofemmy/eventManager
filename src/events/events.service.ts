import { CreateEventDto } from "./dto/createEvent.dto";
import {
  Injectable,
  Param,
  ParseIntPipe,
  HttpException,
  HttpStatus
} from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Event } from "./interfaces/event.interface";

@Injectable()
export class EventsService {
  constructor(
    @InjectModel("Event")
    private readonly eventModel: Model<Event>
  ) {}
  async createEvent(createEventDto: CreateEventDto): Promise<Event> {
    return await this.eventModel.create({
      title: "Testing a new title",
      description: "Hey how are you",
      isPublished: false
    });
  }
  async getEvents(): Promise<Event[]> {
    return await this.eventModel.find();
  }
  async getById(id: string): Promise<Event> {
    try {
      return await this.eventModel.findById(id);
    } catch (error) {
      throw new HttpException(
        `Resource with id ${id} not found`,
        HttpStatus.NOT_FOUND
      );
    }
  }
  // async updateById(eventDTO: CreateEventDto) {
  //   const { id } = eventDTO;
  //   const evt = await this.getById(id);
  //   return await this.eventModel.save({
  //     ...evt,
  //     ...eventDTO
  //   });

  // const res = await this.eventRepository.update(id, eventDTO);
  // if (res.raw.changedRows === 0) {
  //   throw new HttpException(`Invalid ID`, HttpStatus.BAD_REQUEST);
  // }
}
