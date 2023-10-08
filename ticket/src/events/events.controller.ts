import {
  Body,
  Controller,
  UseInterceptors,
  UploadedFile,
  Post,
  Get,
} from '@nestjs/common';
import * as multer from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from './event.schema';

const storage = {
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/images/products/');
    },
    filename: function (req, file, cb) {
      const extArray = file.mimetype.split('/');
      const extension = extArray[extArray.length - 1];
      cb(null, file.fieldname + '-' + Date.now() + '.' + extension);
    },
  }),
};

@Controller('event')
export class EventsController {
  constructor(private readonly eventService: EventsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', storage))
  create(
    @Body() dto: CreateEventDto,
    @UploadedFile() image: Express.Multer.File,
  ): Promise<Event> {
    dto.image = 'uploads/images/events/' + image.filename;

    return this.eventService.create(dto);
  }

  @Get()
  getAll(): Promise<Event[]> {
    return this.eventService.getAll();
  }
}
