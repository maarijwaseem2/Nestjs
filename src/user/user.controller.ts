/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('user')
export class UserController{

    //add User
    @Post('/add')
    add() : string {
        return 'User has been Registered Successfully';
    }

    //update User
    @Put('/update')
    update() : string {
        return 'User has been Updated Successfully';
    }

    //Find all User
    @Get('/findAll')
    findAll() : string{
        return 'All User Find has been Registered Successfully';
    }
}