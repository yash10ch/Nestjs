import { Body, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/creatPost.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MetaOption } from 'src/meta-options/meta-options.entity';
import { Post } from '../post.entity';

@Injectable()
export class PostsService {

    constructor(
        private readonly userService: UserService,
        
        @InjectRepository(Post)
        private readonly postsRepository: Repository<Post>,

        @InjectRepository(MetaOption)
        public readonly metaOptionsRepository: Repository<MetaOption>
    ) {}


    public async create(@Body() createPostDto: CreatePostDto){
        //create metaOptions
        let metaOptions = createPostDto.metaOptions ? this.metaOptionsRepository.create(createPostDto.metaOptions) : null;

        if(metaOptions){
            await this.metaOptionsRepository.save(metaOptions);
        }
        //Create post
        let post = this.postsRepository.create(createPostDto);

        //Add metaOptions to the post
        if(metaOptions){
            post.metaOptions = metaOptions;
        }

        //return the post
        return await this.postsRepository.save(post)

    }

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
