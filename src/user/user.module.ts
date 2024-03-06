/* eslint-disable prettier/prettier */
import { Module,NestModule ,MiddlewareConsumer} from '@nestjs/common';
import { UserController } from './user.controller';
import { userMiddleware } from './user.middleware';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [],
})
export class UserModule implements NestModule {
        configure(consumer: MiddlewareConsumer){
            consumer.apply(userMiddleware).forRoutes('user');
        }

}
