import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UserService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {

constructor(
    @Inject(forwardRef(() => UserService))
     private readonly userService: UserService
) {}

    public login(email: string, password: string,id: string) {    
     //Check user exists in database
     const user = this.userService.findOneById('1234');
     //login
     //return token
     return 'SAMPLE_TOKEN';
    }

    public isAuth(){
    return true;
    }
}

