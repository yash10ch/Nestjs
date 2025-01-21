import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './providers/users.service';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';


@Module({
  controllers: [UsersController],
  providers: [UserService],    //import the UserService and UserRepository providers
  exports: [UserService],     //export the UserService provider
  imports: [forwardRef(()=> AuthModule),TypeOrmModule.forFeature([User])]       //import the AuthModule
})
export class UsersModule {}
