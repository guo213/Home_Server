import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  // Typegoose 2/3 -》原型以服务 3/3
  imports: [TypegooseModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
