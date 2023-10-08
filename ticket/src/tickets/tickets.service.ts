import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Ticket, TicketDocument } from './tickets.schema';
import { Model } from 'mongoose';
import { CreateTicketDto } from './create-ticket.dto';

@Injectable()
export class TicketsService {
  constructor(
    @InjectModel(Ticket.name)
    private readonly ticketModel: Model<TicketDocument>,
  ) {}

  create(dto: CreateTicketDto): Promise<Ticket> {
    return this.ticketModel.create(dto);
  }

  getByEventId(eventId: string): Promise<Ticket[]> {
    return this.ticketModel.find({ eventId });
  }
}
