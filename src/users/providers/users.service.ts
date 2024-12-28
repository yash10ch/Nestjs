import { Injectable } from '@nestjs/common';
import { GetUserParamDto } from '../Dtos/get-user-param.dto';

@Injectable()      //this decorator makes the class a provider
export class UserService{

    public findAll(getUsersDto:GetUserParamDto, limit:number, page:number){
        return [{
            firstName: 'John',
            lastName: 'Doe',
        },
        {
            firstName: 'Yash',
            lastName: 'Chaudhary',    
        }]
    }

    public findOneById(id:number){
        const users = [{
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
        },
        {
            id: 2,
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