import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PostType } from "./eums/postType.enum";
import { PostStatus } from "./eums/postStatus.enum";
import { CreatePostMetaOptionDto } from "../meta-options/dtos/create-post-met-option.dto";
import { MetaOption } from "src/meta-options/meta-options.entity";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 512,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'enum',
    enum: PostType,
    nullable: false,
    default: PostType.POST,
  })
  postType: PostType;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
    unique: true,
  })
  slug: string;

  @Column({
    type: 'enum',
    enum: PostStatus,
    nullable: false,
    default: PostStatus.DRAFT,
  })
  status: PostStatus;

  @Column({
    type: 'text',
    nullable: true,
  })
  content?: string;


  @Column({
    type: 'text',
    nullable: true,
  })
  schema?: string;

  @Column({
    type: 'varchar',
    length: 1024,
    nullable: true,
  })
  featureImageUrl?: string;


  @Column({
    type: 'timestamp',    //datetime in mysql
    nullable: true,
  })
  publishOn?: Date;

  //work on these in lecture on relationship
  tags?: string[];

  @OneToOne(()=> MetaOption)
  @JoinColumn()
  metaOptions?: MetaOption;
}