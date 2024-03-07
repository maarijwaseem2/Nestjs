/* eslint-disable prettier/prettier */
import {CanActivate , Injectable} from '@nestjs/common'
import { ExecutionContext } from '@nestjs/common/interfaces/features/execution-context.interface';

@Injectable()
export class BookGuard implements CanActivate{
    canActivate(context: ExecutionContext) : boolean {
        return false;
    } 

}