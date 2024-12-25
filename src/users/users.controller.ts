import { Controller , Get, Post, Patch, Put, Delete, Param, Query, Body, Req, Headers, Ip, ParseIntPipe, DefaultValuePipe, ValidationPipe} from '@nestjs/common';
import { CreateUserDto } from './Dtos/create-users.dto';
import { GetUserParamDto } from './Dtos/get-user-param.dto';
import { PatchUserDto } from './Dtos/patch-user.dto';

@Controller('users')
export class UsersController {

/*--------------------------------------------------------------section 2---------------------------------------------------------------------------------------------- */

    // @Get('/:id/:optional?')    //this is a get decorator for the getUsers method in the controller class for the users module http://localhost:3000/users
    // public getUsers(@Param() params:any, @Query() query:any){
    //     console.log(params);
    //     console.log(query);
    //     return 'Get all users';
    // }


    //for specific parameters
    // @Get('/:id/:optional?')    //this is a get decorator for the getUsers method in the controller class for the users module http://localhost:3000/users
    // public getUsers(@Param('id') id:any, @Query('limit') limit:any){
    //     console.log(id);
    //     console.log(limit);
    //     return 'Get all users';
    // }

    // @Post()    //this is a post decorator for the createUser method in the controller class for the users module http://localhost:3000/users
    // public createUser(@Body() req:any, @Headers() headers:any, @Ip() ip:any){
    //     console.log(req);
    //     console.log(headers);
    //     console.log(ip);
    //     return 'Create a user';
    // }

    // @Post()    //this is a post decorator for the createUser method in the controller class for the users module http://localhost:3000/users using Express.js
    // public createUser(@Req() req:Request){
    //     console.log(req);
    //     return 'Create a user';
    // }

/*--------------------------------------------------------------section 3---------------------------------------------------------------------------------------------- */

/** 
 Final Endpoint - /users/id?limit=10&page=1

 Parama id optional, convert to integer, cannot have a default value

 Query limit integer, default 10

 Query page integer, default value 1

 ==> USE CASES

./users/ -> return all users with default pagination

/users/1223 -> returns one user whos id is 1234

/users?limit=10&page=2 -> return page 2 with limt of pagination 10
*/


 //for example of ParseIntPipe
    // @Get('/:id?')    //this is a get decorator for the getUsers method in the controller class for the users module http://localhost:3000/users
    // public getUsers(@Param('id', ParseIntPipe) id:number | undefined, @Query('limit',new DefaultValuePipe(10), ParseIntPipe) limit:number,@Query('page',new DefaultValuePipe(1), ParseIntPipe) page:number){
    //     console.log(typeof id);
    //     console.log(id);
    //     console.log(typeof limit);
    //     console.log(limit);
    //     console.log(typeof page);
    //     console.log(page);

    //     return 'Get all users';
    // }


    //for example of ValidationPipe
     @Post()    //this is a post decorator for the createUser method in the controller class for the users module http://localhost:3000/users
    public createUser(@Body() createUserDto:CreateUserDto){
        console.log(createUserDto);
        return 'Create a user';
    }


    //for example of ValidationPipe with ParseIntPipe
     @Get('/:id?')    //this is a get decorator for the getUsers method in the controller class for the users module http://localhost:3000/users
    public getUsers(@Param() getUserParamDto:GetUserParamDto, @Query('limit') limit:any){
        console.log(getUserParamDto);
        return 'Get all users';
    }


    //this is a example of Mapped Types using PartialType
    @Patch()
    public updateUser(@Body() updateUserDto:PatchUserDto){
        console.log(updateUserDto);
        return 'Update a user'; 
    }

}
