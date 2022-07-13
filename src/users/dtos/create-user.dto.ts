import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Should be a string' })
  @IsEmail({}, { message: 'Should be a valid email' })
  readonly email: string;

  @IsString({ message: 'Should be a string' })
  @Length(4, 16, {
    message: 'Should be longer than 4 and shorter than 16 characters',
  })
  readonly password: string;
}
