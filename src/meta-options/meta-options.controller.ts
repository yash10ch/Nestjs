import { Body, Controller, Post } from '@nestjs/common';
import { CreatePostMetaOptionDto } from './dtos/create-post-met-option.dto';
import { MetaOptionsService } from './providers/meta-options.service';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Meta') 
@Controller('meta-options')
export class MetaOptionsController {

  constructor(
      //Injecting MetaOptionsService
          private readonly metaOptionsService:MetaOptionsService
   ){}

   @Post()
    public creatUser(@Body() createPostMetaOptionDto:CreatePostMetaOptionDto){
      return this.metaOptionsService.createMetaForPost(createPostMetaOptionDto);
    }
}
