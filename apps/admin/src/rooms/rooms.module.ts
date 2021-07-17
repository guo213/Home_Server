import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomsController } from './rooms.controller';
import { Room } from './entities/room.entity';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  // Typegoose 2/3 -》原型以服务 3/3
  imports: [TypegooseModule.forFeature([Room])],
  controllers: [RoomsController],
  providers: [RoomsService],
})
export class RoomsModule {}
