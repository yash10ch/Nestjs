import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {

    public getPosts(userId:string) {
       return [{
        userId: 1,
        id: 1,
        title: "yash chaudhary",
       
       },
       {
        userId: 2,
        id: 1,
        title: "Tarun chaudhary",
       

       }]
    }
}
