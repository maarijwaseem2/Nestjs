/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request,Response,NextFunction } from 'express';


@Injectable()
export class userMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        console.log('This is class based MiddleWare implemented for user Module');
        next();
    }
    
}