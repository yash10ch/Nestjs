import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { GetUserParamDto } from '../Dtos/get-user-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { CreateUserDto } from '../Dtos/create-users.dto';
import { InjectRepository } from '@nestjs/typeorm';

/**
 * Class to connect to Users table and perform bussiness operations
 */
@Injectable()      //this decorator makes the class a provider
export class UserService{

    constructor(
        //Injecting UserService
        @Inject(forwardRef(() => AuthService))
        private readonly authService:AuthService,

        @InjectRepository(User)
        private UserRepository:Repository<User>
    ){}

    public async createUser(createUserDto:CreateUserDto){

        //Check if user already exists
        const existingUser = await this.UserRepository.findOne({
            where:{
                email:createUserDto.email
            }
        });

        //If user already exists, throw an error

        //Create a new user
        let newUser = this.UserRepository.create(createUserDto);
        newUser = await this.UserRepository.save(newUser);

        return newUser;
    }

    public findAll(getUsersDto:GetUserParamDto, limit:number, page:number){

        const auth = this.authService.isAuth();
        console.log(auth);
        
        return [{
            firstName: 'John',
            lastName: 'Doe',
        },
        {
            firstName: 'Yash',
            lastName: 'Chaudhary',    
        }]
    }

    public findOneById(id:string){ 
        const users = [{
            id: '1',
            firstName: 'John',
            lastName: 'Doe',
        },
        {
            id: '2',
            firstName: 'Yash',
            lastName: 'Chaudhary',
        }];

        if(id){
           return users.find(user => user.id === id);
        }else{
            return users;
        }
    }
}