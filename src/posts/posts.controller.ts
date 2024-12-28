import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './services/posts.service';


@Controller('posts')
export class PostsController {

  constructor(
    private readonly postsServices: PostsService
  ) {}  

@Get('/:userId?')
  public getPosts(@Param('userId') userId: string) {
    return this.postsServices.getPosts(userId);
  } 


}
