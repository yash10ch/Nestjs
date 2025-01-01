import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/creatPost.dto';
import { PatchPostDto } from './dtos/patch-post.dto';


@Controller('posts')
@ApiTags('Posts')
export class PostsController {

  constructor(
    private readonly postsServices: PostsService
  ) {}  

@Get('/:userId?')
  public getPosts(@Param('userId') userId: string) {
    return this.postsServices.getPosts(userId);
  } 

@ApiOperation({ 
  summary: 'Create a new post' 
})
@ApiResponse({
  status: 201,
  description: 'The post has been successfully created.',
})
@Post() 
public creatPost(@Body() createPostDto: CreatePostDto) {
  console.log(createPostDto);
} 

@ApiOperation({
  summary: 'Update a post'
})
@ApiResponse({
  status: 200,
  description: 'The post update has been successfully created.',
})
@Patch()
 public updatePost(@Body() updatePostDto: PatchPostDto) {
  console.log(updatePostDto);

 }
}
