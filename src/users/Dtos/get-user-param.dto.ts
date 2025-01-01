import { IsInt, IsOptional } from "class-validator";
import { Type }  from "class-transformer";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class GetUserParamDto {
    @ApiPropertyOptional({
        description: 'The id of the user',
        example: '1234'
    })
    @IsOptional()
    @IsInt()
    @Type(() => Number)
    id?: string;
}