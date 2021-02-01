import { InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'Invalid Name.' })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Invalid Email.' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Invalid Password.' })
  password: string;
}
