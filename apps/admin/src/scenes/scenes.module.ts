import { Module } from '@nestjs/common';
import { ScenesService } from './scenes.service';
import { ScenesController } from './scenes.controller';
import { Scene } from './entities/scene.entity';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  // Typegoose 2/3 -》原型以服务 3/3
  imports: [TypegooseModule.forFeature([Scene])],
  controllers: [ScenesController],
  providers: [ScenesService],
})
export class ScenesModule {}
