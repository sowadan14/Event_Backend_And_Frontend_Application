import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EventDocument = Event & Document;
@Schema({ timestamps: true })
export class Event {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  organizer_id: string;

  @Prop()
  image: string;

  @Prop()
  category: string;

  @Prop()
  address: string;

  @Prop()
  city: string;

  @Prop()
  country: string;

  @Prop()
  startedAt: Date;

  @Prop()
  endedAt: Date;
}

export const EventSchema = SchemaFactory.createForClass(Event);
