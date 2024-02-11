import { Module } from '@nestjs/common';
import { userProviders } from './user.providers';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { databaseProviders } from 'src/models/database/database.providers';

@Module({
  controllers: [UserController],
  providers: [...userProviders, ...databaseProviders, UserService],
})
export class UserModule {}
