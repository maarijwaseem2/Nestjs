/* eslint-disable prettier/prettier */
import {Controller , Get , Post, UseGuards} from '@nestjs/common'
import { BookGuard } from './book.guard'

@Controller('book')
export class BookController{

    @Get('/findAll')
    @UseGuards(new BookGuard())
    findAllBook() : string{
        return 'this api is return all book'
    }

    @Post('/add')
    addBook() : string{
        return 'This api will add book'
    }
}