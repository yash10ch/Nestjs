import { Controller , Get, Post, Patch, Put, Delete, Param, Query, Body, Req, Headers, Ip, ParseIntPipe, DefaultValuePipe, ValidationPipe} from '@nestjs/common';
import { CreateUserDto } from './Dtos/create-users.dto';
import { GetUserParamDto } from './Dtos/get-user-param.dto';
import { PatchUserDto } from './Dtos/patch-user.dto';
import { UserService } from './providers/users.service';

@Controller('users')
export class UsersController {

 constructor(
    //Injecting UserService
        private readonly userService:UserService
 ){}

//   @Get(':id?')
//   public getUsers(@Param() getUsersDto:GetUserParamDto, @Query('limit', new DefaultValuePipe(10)) limit: number, @Query('page', new DefaultValuePipe(1), ParseIntPipe) page:number) {
//     return this.userService.findAll(getUsersDto,limit,page);
//   }

  @Get(':id?')
  public getUsersById(@Param() getUsersDto:GetUserParamDto, @Query('limit', new DefaultValuePipe(10)) limit: number, @Query('page', new DefaultValuePipe(1)) page:number) {
    console.log(typeof getUsersDto);
    return this.userService.findOneById(getUsersDto.id);
  }

}
