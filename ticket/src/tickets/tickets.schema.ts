import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TicketDocument = Ticket & Document;
@Schema()
export class Ticket {
  @Prop()
  name: string;

  @Prop()
  price: string;

  @Prop()
  description: string;

  @Prop()
  eventId: string;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
