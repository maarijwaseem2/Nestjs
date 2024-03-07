/* eslint-disable prettier/prettier */
import { Get,Controller, BadRequestException , UseFilters  } from "@nestjs/common";
import { BookCustomExceptionFilter } from "./book.exception";

@Controller('book')
export class BookController{

    @Get('/get')
    @UseFilters(BookCustomExceptionFilter)
    GetBook():string{
        throw new BadRequestException();
        return "This is book api";

    }
}