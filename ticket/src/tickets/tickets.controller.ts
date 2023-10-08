import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { CreateTicketDto } from './create-ticket.dto';
import { Ticket } from './tickets.schema';
import { TicketsService } from './tickets.service';

@Controller('ticket')
export class TicketsController {
  constructor(private readonly ticketService: TicketsService) {}

  @Post()
  create(@Body() dto: CreateTicketDto): Promise<Ticket> {
    return this.ticketService.create(dto);
  }

  @Get(':eventId')
  getByEventId(@Param('eventId') eventId: string): Promise<Ticket[]> {
    return this.ticketService.getByEventId(eventId);
  }
}
