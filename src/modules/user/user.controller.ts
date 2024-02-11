import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UserInterface } from 'src/types/user.interface';
import { UserService } from './user.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @Get('/:id')
  getById(@Param('id') id: string) {
    return this.userService.getById(id);
  }

  @UseGuards(AuthGuard)
  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() value: UserInterface) {
    return this.userService.create(value);
  }

  @UseGuards(AuthGuard)
  @Put('/:id')
  update(@Param('id') id: string, @Body() value: UserInterface) {
    return this.userService.update(id, value);
  }

  @UseGuards(AuthGuard)
  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
