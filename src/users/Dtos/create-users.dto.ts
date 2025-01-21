import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';    

export class CreateUserDto{
 @ApiProperty({
        description: 'string',
        example: 'This is a post title'
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(96)
    firstName:string;

    @ApiProperty({
        description:  'string',
        example: 'This is a post title'
    })
    @IsString()
    @MinLength(3)
    @MaxLength(96)
    @IsOptional()
    lastName?:string;

    @ApiProperty({
        description:  'email',
        example: 'This is a post title'
    })
    @IsEmail()
    @MaxLength(96)
    @IsNotEmpty()
    email:string;

    @ApiProperty({
        description: 'string',
        example: 'This is a post title'
    })
    @IsString() 
    @IsNotEmpty()
    @MaxLength(96)
    @MinLength(8)
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 
    {message:'Minimum eight characters, at least one letter, one number and one special character'})   
    password:string;
}