import { IsArray, IsEnum, IsISO8601, IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MaxLength, MinLength, ValidateNested } from "class-validator";
import { PostStatus } from "../eums/postStatus.enum";
import { PostType } from "../eums/postType.enum";
import { CreatePostMetaOptionDto } from "../../meta-options/dtos/create-post-met-option.dto";
import { Type } from "class-transformer";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreatePostDto {
    @ApiProperty({
        description: 'The title of the post',
        example: 'This is a post title'
    })
    @IsString()
    @MinLength(4)
    @IsNotEmpty()
    @MaxLength(512)
    title: string;

    @ApiProperty({
        enum: PostType,
        description: 'Possible values are "post","page","Story","Series"',
    })
    @IsEnum(PostType)
    @IsNotEmpty()
    postType: PostType;

    @ApiProperty({
        description: 'The slug of the post',
        example: 'this-is-a-slug'
    })
    @IsString()
    @IsNotEmpty()
    @MaxLength(256)
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message: 'slug must be a valid slug'
    })
    slug: string;

    @ApiProperty({
        enum: PostStatus,
        description: 'Possible values are "draft","published","scheduled"',
    })
    @IsEnum(PostStatus)
    @IsNotEmpty()
    status: PostStatus;

    @ApiPropertyOptional({
        description: 'The content of the post',
        example: 'This is a post content body'
    })
    @IsString()
    @IsOptional()
    content?: string;


    @ApiPropertyOptional({
        description: 'The schema of the post in JSON format',
        example: '{"type":"object","properties":{"name":{"type":"string"}}}'
    })
    @IsJSON()
    @IsOptional()
    schema?: string;

    @ApiPropertyOptional({
        description: 'The featured image url of the post',
        example: 'https://example.com/image.jpg'
    })
    @IsOptional()
    @IsUrl()
    @MaxLength(1024)
    featuredImgUrl?: string;

    @ApiPropertyOptional({
        description: 'The publish date of the post',
        example: '2021-12-31T23:59:59Z'
    })
    @IsISO8601()
    @IsOptional()
    publishOn?: Date;

    @ApiPropertyOptional({
        description: 'The tags of the post',
        example: '["nestJs","TypeScript","NodeJs"]'
    })
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    @MinLength(3, { each: true })
    tags?: string[];


    @ApiPropertyOptional({
        type: 'object',
        required: false,
        items: {
            type: 'object',
            properties: {
                metaValue: {
                    type: 'json',
                    description: 'The metaValue is a JSON string',
                    example: '{"sidebarEnabled":true}',
                }
   
            }
        }
    })
    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => CreatePostMetaOptionDto)
    metaOptions: CreatePostMetaOptionDto | null;
}