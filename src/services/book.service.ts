/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";

@Injectable()
export class BookService {
    //add book
    addBook(): string {
      return 'This will add Book';
    }
  
    //update book
    updateBook(): string {
      return 'This will update book';
    }
  
    //delete book
    deleteBook(): string {
      return 'This is for deleting book';
    }
  
    //find all book
    findAllBook(): string {
      return 'This will find All Books';
    }
  
    //find by id book
  }
  