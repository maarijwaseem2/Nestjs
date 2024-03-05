/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users.module';
import { BookController } from './controllers/book.controller';
import { BookService } from './services/book.service';

@Module({
  imports: [UsersModule],
  controllers: [BookController],
  providers: [BookService],
})
export class RootModule {
  constructor() {
    console.log('App Module');
  }
}
