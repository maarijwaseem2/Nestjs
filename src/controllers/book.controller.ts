/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from 'src/services/book.service';

@Controller('book')
export class BookController {
    constructor(private bookServices:BookService){}
  //add book
  @Post('/add')
  addBook(): string {
    return this.bookServices.addBook();
  }

  //update book
  @Put('/update')
  updateBook(): string {
    return this.bookServices.updateBook();
  }

  //delete book
  @Delete('/delete')
  deleteBook(): string {
    return this.bookServices.deleteBook();
  }

  //find all book
  @Get('/findAll')
  findAllBook(): string {
    return this.bookServices.findAllBook();
  }

  //find by id book
  @Get('/find/:id')
  findByIdBook(@Param() params): string {
    return `This will find a book of id #${params.id}`;
  }
}
