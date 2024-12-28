import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './providers/users.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [UsersController],
  providers: [UserService],    //import the UserService provider
  exports: [UserService],     //export the UserService provider
  imports: [forwardRef(()=> AuthModule)]       //import the AuthModule
})
export class UsersModule {}
