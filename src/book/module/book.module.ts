/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { BookServices } from '../services/book.service';
import { BookController } from '../controller/book.controller';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookServices],
})
export class BookModule {
    
}
