import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'The phone number of the users' })
  @IsNotEmpty()
  @IsString()
  phone_number: string;

  @ApiProperty({ description: 'The first name of the users' })
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @ApiProperty({ description: 'The last name of the users' })
  @IsNotEmpty()
  @IsString()
  last_name: string;

  @ApiProperty({ description: 'The image of the users' })
  @IsNotEmpty()
  @IsString()
  image?: string;
}
