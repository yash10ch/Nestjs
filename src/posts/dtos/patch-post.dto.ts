import { ApiProperty , PartialType } from "@nestjs/swagger";
import { CreatePostDto } from "./creatPost.dto";
import { IsInt, IsNotEmpty } from "class-validator";

export class PatchPostDto extends PartialType(CreatePostDto) {

    @ApiProperty({
        description: 'The id of the post',
        example: 1
    })
    @IsInt()
    @IsNotEmpty()
    id:number;
}