import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Event, EventDocument } from './event.schema';
import { Model } from 'mongoose';
import { CreateEventDto } from './dto/create-event.dto';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Event.name) private readonly eventModel: Model<EventDocument>,
  ) {}

  create(dto: CreateEventDto): Promise<Event> {
    return this.eventModel.create(dto);
  }

  getAll(): Promise<Event[]> {
    return this.eventModel.find();
  }
}
