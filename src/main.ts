/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request,Response,NextFunction } from 'express';

async function globalMiddlewareOne(req : Request,res : Response, next : NextFunction) {
  console.log("This is a globally middleware 1"); 
  next();
}
async function globalMiddlewaretwo(req : Request,res : Response, next : NextFunction) {
  console.log("This is a globally middleware 2"); 
  next();
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddlewareOne);
  app.use(globalMiddlewaretwo);
  await app.listen(3000);
}
bootstrap();
