/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Book } from '../data/data.dto';
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class BookServices{
    public  books: Book[] = [];

    //add Book
    add(book: Book) : string {
        // id auto generate 
        book.id = uuidv4();
        this.books.push(book);
        return 'Book has been successfully Added';
    }

    //update Book
    update(book: Book) : string {
        const index = this.books.findIndex((currBook)=>{
            return currBook.id = book.id;
        });
        this.books[index] = book;
        return 'Book has been successfully updated';
    }

    //delete Book
    delete(bookId : string) : string {
        this.books.filter((book)=>{
            return book.id = bookId;
        });
        return 'Book has been deleted'
    }

    //Find all Book
    findAll() : Book[]{
        return this.books;
    }
}