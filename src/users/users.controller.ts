import { Controller , Get, Post, Patch, Put, Delete, Param, Query, Body, Req, Headers, Ip, ParseIntPipe, DefaultValuePipe, ValidationPipe} from '@nestjs/common';
import { CreateUserDto } from './Dtos/create-users.dto';
import { GetUserParamDto } from './Dtos/get-user-param.dto';
import { PatchUserDto } from './Dtos/patch-user.dto';
import { UserService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users') 
export class UsersController {

 constructor(
    //Injecting UserService
        private readonly userService:UserService
 ){}

  @Get(':id?')
  @ApiOperation({ summary: 'Get all users' }) 
  @ApiResponse({ status: 200, description: 'Return all users' })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'The number of items to return',
    example: 10
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'The number of items to return',
    example: 1
  })
  public getUsers(@Param() getUsersDto:GetUserParamDto, @Query('limit', new DefaultValuePipe(10)) limit: number, @Query('page', new DefaultValuePipe(1), ParseIntPipe) page:number) {
    return this.userService.findAll(getUsersDto,limit,page);
  }

  // @Get(':id?')
  // public getUsersById(@Param() getUsersDto:GetUserParamDto, @Query('limit', new DefaultValuePipe(10)) limit: number, @Query('page', new DefaultValuePipe(1)) page:number) {
  //   console.log(typeof getUsersDto);
  //   return this.userService.findOneById(getUsersDto.id);
  // }

  @Post()
  public creatUser(@Body() createUserDto:CreateUserDto){
    return this.userService.createUser(createUserDto);
  }
}
