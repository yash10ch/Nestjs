import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { GetUserParamDto } from '../Dtos/get-user-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';


/**
 * Class to connect to Users table and perform bussiness operations
 */
@Injectable()      //this decorator makes the class a provider
export class UserService{

    constructor(
        //Injecting UserService
        @Inject(forwardRef(() => AuthService))
        private readonly authService:AuthService
    ){}

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