import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './providers/users.service';

@Module({
  controllers: [UsersController],
  providers: [UserService],    //import the UserService provider
  exports: [UserService],     //export the UserService provider
})
export class UsersModule {}
