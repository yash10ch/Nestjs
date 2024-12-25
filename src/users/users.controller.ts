import { Controller , Get, Post, Patch, Put, Delete, Param, Query, Body, Req, Headers, Ip} from '@nestjs/common';

@Controller('users')
export class UsersController {

    // @Get('/:id/:optional?')    //this is a get decorator for the getUsers method in the controller class for the users module http://localhost:3000/users
    // public getUsers(@Param() params:any, @Query() query:any){
    //     console.log(params);
    //     console.log(query);
    //     return 'Get all users';
    // }


    //for specific parameters
    @Get('/:id/:optional?')    //this is a get decorator for the getUsers method in the controller class for the users module http://localhost:3000/users
    public getUsers(@Param('id') id:any, @Query('limit') limit:any){
        console.log(id);
        console.log(limit);
        return 'Get all users';
    }

    @Post()    //this is a post decorator for the createUser method in the controller class for the users module http://localhost:3000/users
    public createUser(@Body() req:any, @Headers() headers:any, @Ip() ip:any){
        console.log(req);
        console.log(headers);
        console.log(ip);
        return 'Create a user';
    }

    // @Post()    //this is a post decorator for the createUser method in the controller class for the users module http://localhost:3000/users using Express.js
    // public createUser(@Req() req:Request){
    //     console.log(req);
    //     return 'Create a user';
    // }
}
