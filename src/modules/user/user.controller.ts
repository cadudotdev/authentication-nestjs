import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserInterface } from 'src/types/user.interface';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/:id')
  getById(@Param('id') id: string) {
    return this.userService.getById(id);
  }

  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Post()
  create(@Body() value: UserInterface) {
    return this.userService.create(value);
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() value: UserInterface) {
    return this.userService.update(id, value);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
