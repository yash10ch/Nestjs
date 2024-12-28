import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './providers/posts.service';


@Controller('posts')
export class PostsController {

  constructor(
    private readonly postsServices: PostsService
  ) {}  

@Get('/:userId?')
  public getPosts(@Param('userId') userId: number) {
    return this.postsServices.getPosts(userId);
  } 


}
