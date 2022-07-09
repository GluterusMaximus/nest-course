import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  createUser(@Body() UserDto: CreateUserDto) {
    return this.usersService.createUser(UserDto);
  }

  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }
}
