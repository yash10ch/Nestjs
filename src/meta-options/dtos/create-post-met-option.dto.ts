import { ApiProperty } from "@nestjs/swagger";
import { IsJSON, IsNotEmpty, IsString } from "class-validator";

export class CreatePostMetaOptionDto {
   
    @ApiProperty({
        description: 'string',
        example: 'This is a Meta value'
    })
    @IsNotEmpty()
    @IsJSON()
    metaValue: string;
}