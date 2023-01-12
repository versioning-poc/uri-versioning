import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersV2Controller } from './users-v2.controller';

@Module({
  controllers: [UsersController, UsersV2Controller],
  providers: [UsersService]
})
export class UsersModule { }
