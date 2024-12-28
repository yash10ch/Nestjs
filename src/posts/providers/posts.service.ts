import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {

    constructor(
        private readonly userService: UserService
    ) {}

    public getPosts(userId:string) {
    const user = this.userService.findOneById(userId);

       return [{
        user: user,
        userId: 1,
        id: 1,
        title: "yash chaudhary",
       
       },
       {
        user: user,
        userId: 2,
        id: 1,
        title: "Tarun chaudhary",

       }]
    }
}
