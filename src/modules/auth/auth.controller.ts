import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserInterface } from 'src/types/user.interface';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() data: UserInterface) {
    return this.authService.signIn(data.email, data.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('sign-up')
  signUp(@Body() data: UserInterface) {
    return this.authService.signUp(data);
  }
}
