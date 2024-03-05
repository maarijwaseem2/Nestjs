/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Book } from '../data/data.dto';
import { BookServices } from '../services/book.service';

@Controller('book')
export class BookController{
    
    constructor(private BookService : BookServices){}

    //add Book
    @Post('/add')
    add(@Body() book: Book) : string {
        return this.BookService.add(book);
    }

    //update Book
    @Put('/update')
    update(@Body() book : Book) : string {
        return this.BookService.update(book);
    }

    //delete Book
    @Delete('/delete/:id')
    delete(@Param('id') BookId : string) : string {
        return this.BookService.delete(BookId);
    }

    //Find all Book
    @Get('/findAll')
    findAll() : Book[]{
        return this.BookService.findAll();
    }
}