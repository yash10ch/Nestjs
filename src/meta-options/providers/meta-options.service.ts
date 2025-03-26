import { Injectable } from '@nestjs/common';
import { CreatePostMetaOptionDto } from '../dtos/create-post-met-option.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from '../meta-options.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MetaOptionsService {


   constructor(
  
          @InjectRepository(MetaOption)
          private MetaOptionRepository:Repository<MetaOption>
      ){}
  

   public async createMetaForPost(createPostMetaOptionDto:CreatePostMetaOptionDto){
  
          
          let newMeta = this.MetaOptionRepository.create(createPostMetaOptionDto);
          newMeta = await this.MetaOptionRepository.save(newMeta);
  
          return newMeta;
      }
}
